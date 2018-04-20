/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import SendForm from '../../components/sendForm';
import { sendFormAction, fetchCountriesAction } from '../../store/reducers/appReducer';
import { logoutAction } from '../../store/reducers/appReducer';

/*
 * Code
 */
// State
const mapStateToProps = ({ appReducer }) => ({
  mail: appReducer.mail,
  countries: appReducer.countries,
});

// Actions
const mapDispatchToProps = dispatch => ({
  sendFormAction: (values) => {
    dispatch(sendFormAction(values))
  },
  logoutAction: () => {
    dispatch(logoutAction());
  },
  fetchCountriesAction: (countries) => {
    dispatch(fetchCountriesAction(countries));
  },
});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const SendFormContainer = createContainer(SendForm);
export default SendFormContainer;