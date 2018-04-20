/*
 * Npm Import
 */
/*
 * Local Import
 */

/*
 * Types
 */
// Deal with login action
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';

// Set the final merged image to be send
export const SELECT_IMAGE_TO_SEND = 'SELECT_IMAGE_TO_SEND';

// dealing with sending form
export const SEND_FORM = 'SEND_FORM';
export const SEND_FORM_SUCCESS = 'SEND_FORM_SUCCESS';
export const SEND_FORM_FAILURE = 'SEND_FORM_FAILURE';

// Deal with the sending mail status TODO: Redefined this function
export const RESET_MAIL_STATUS = 'RESET_MAIL_STATUS';

export const FETCH_EVENT_ID = 'FETCH_EVENT_ID';

// For now it's overkilled but I kept it if we fetch countries from an api
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';

/*
 * State
*/

const initialState = {
  login: {
    logging: false,
    logged: false,
    error: null,
  },
  selectedImageId: null,
  imageFilteredMaskToSend: null,
  mailStatus: true,
  mail: {
    error: null,
    sending: false,
    status: false,
  },
  eventId: '',
  countries: [],
};

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        login: {
          logging: true,
          logged: false,
          error: null,
        },
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        login: {
          logging: false,
          logged: true,
          error: null,
        },
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        login: {
          logging: false,
          logged: false,
          error: action.payload,
        },
      };
    }
    
    case SELECT_IMAGE_TO_SEND: {
      return {
        ...state,
        imageFilteredMaskToSend: action.payload,
      };
    }
    case SEND_FORM: {
      return {
        ...state,
        mail: {
          error: null,
          sending: true,
          status: false,
        },
      };
    }
    case SEND_FORM_SUCCESS: {
      return {
        ...state,
        mail: {
          error: null,
          sending: false,
          status: true,
        },
        mailStatus: true,
      };
    }
    case SEND_FORM_FAILURE: {
      return {
        ...state,
        mail: {
          error: action.payload,
          sending: false,
          status: false,
        },
      };
    }
    case RESET_MAIL_STATUS: {
      return {
        ...state,
        mail: {
          error: null,
          sending: false,
          status: false,
        },
      };
    }
    case LOGOUT: {
      localStorage.removeItem('token');
      return {
        ...state,
        login: {
          logging: false,
          logged: false,
          error: null,
        },
      };
    }
    case FETCH_EVENT_ID: {
      return {
        ...state,
        eventId: action.payload
      };
    }
    case FETCH_COUNTRIES: {
      return {
        ...state,
      }
    }
    case FETCH_COUNTRIES_SUCCESS: {
      return {
        ...state,
        countries: action.payload,
      }
    }
    case FETCH_COUNTRIES_FAILURE: {
      return {
        ...state,
      }
    }
    default:
      return {
        ...state,
      };
  }
};

/*
 *Action creators
 */
export const loginAction = values => ({
  type: LOGIN,
  payload: values,
});
export const loginSuccessAction = response => ({
  type: LOGIN_SUCCESS,
  payload: response,
});
export const loginFailureAction = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const setImageToSendAction = image => ({
  type: SELECT_IMAGE_TO_SEND,
  payload: image,
});

export const sendFormAction = values => ({
  type: SEND_FORM,
  payload: values,
});
export const sendFormSuccessAction = data => ({
  type: SEND_FORM_SUCCESS,
  payload: data,
});
export const sendFormFailureAction = error => ({
  type: SEND_FORM_FAILURE,
  payload: error,
});

export const resetMailStatusAction = () => ({
  type: RESET_MAIL_STATUS,
});

export const logoutAction = () => ({
  type: LOGOUT,
});

export const fetchEventIdAction = eventId => ({
  type: FETCH_EVENT_ID,
  payload: eventId
});

export const fetchCountriesAction = countries => ({
  type: FETCH_COUNTRIES,
  payload: countries,
});
export const fetchCountriesSuccessAction = countries => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

/*
 * Export default
*/
export default reducer;
