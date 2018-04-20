/*
 * Npm import
*/
import axios from 'axios';

/*
 * Local import
 */
// Static countries list (Could be fetched from a website api, but the list is too long)
import ListCountries from '../../utils/countriesList';
import {
  LOGIN,
  loginSuccessAction,
  loginFailureAction,
  SEND_FORM,
  sendFormSuccessAction,
  sendFormFailureAction,
  fetchEventIdAction,
  FETCH_COUNTRIES,
  fetchCountriesSuccessAction,
} from '../reducers/appReducer';
import { fetchEventSuccessAction } from '../reducers/maskReducer';
/*
 * Code
 */

/*
 * Middleware
 */
export default store => next => (action) => {
  switch (action.type) {
    case LOGIN:
      const loginFormData = new FormData(action.payload);
      const url = `${process.env.REACT_APP_API_HOST}/jwt-auth/v1/token`;
      axios({
        method: 'post',
        data: loginFormData,
        url,
      })
        .then(({ data }) => {
          const { token } = data;

          // if there is a token in the response
          // we set it in the localstorage
          if (typeof token !== 'undefined') {
            localStorage.setItem('token', token);
          }
          store.dispatch(loginSuccessAction());

          // set the event in the localstorage
          localStorage.setItem('event', JSON.stringify(data));

          // Set data in the reducer
          store.dispatch(fetchEventSuccessAction(data));
          // Set the id event in the localstorage
          // It is used in the send form action in case of a app refreshing
          localStorage.setItem('eventId', data.id);
          store.dispatch(fetchEventIdAction(data.id));
        })
        .catch((error) => {
          store.dispatch(loginFailureAction('Error password or login'));
        });
      break;
      case SEND_FORM:
        // Check if the user is online before processing ajax call
        if (!navigator.onLine) {
          return store.dispatch(sendFormFailureAction('You are offline, Please wait'));
        }
        // Fetch data from the form
        const formData = new FormData(action.payload);
        // Add the image tobe send
        formData.append('image', store.getState().appReducer.imageFilteredMaskToSend);
        
        // Fetch the event id
        let id = store.getState().appReducer.eventId;

        // Control the refresh, if the id is invalid from the state
        // I call the localstorage
        if (id.length === 0) {
          id = localStorage.getItem('eventId');
        }
        
        axios({
          method: 'post',
          url: `${process.env.REACT_APP_API_HOST}/wp/v2/leads/${id}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          data: formData,
        })
        .then((data) => {
          store.dispatch(sendFormSuccessAction());
        })
        .catch((error) => {
          store.dispatch(sendFormFailureAction('Error while processing'));
        });
      break;
      case FETCH_COUNTRIES:
        // I still decided to set the countries fetching has a ajax call
        // in case we decide to use an api.
        store.dispatch(fetchCountriesSuccessAction(ListCountries));
      break;
    default:
  }
  next(action);
};