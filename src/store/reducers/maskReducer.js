/*
 * Npm Import
 */
/*
 * Local Import
 */

/*
 * Types
 */

export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';

export const SELECT_MASK = 'SELECT_MASK';

/*
 * State
*/
const initialState = {
  maskList: {
    masks: [],
    loading: true,
    error: null,
  },
  eventItem: {
    event: {},
    loading: true,
    error: null,
  },
  selectedMask: '',
};

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_EVENT_SUCCESS: {
      return {
        ...state,
        eventItem: {
          event: action.payload,
          loading: false,
          error: null,
        },
        maskList: {
          masks: action.payload,
          loading: false,
          error: null,
        },
      };
    }
    case SELECT_MASK: {
      localStorage.setItem('selectedmask', action.payload);
      return {
        ...state,
        selectedMask: action.payload
      };
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
export const fetchEventSuccessAction = event => ({
  type: FETCH_EVENT_SUCCESS,
  payload: event,
});
export const selectMaskAction = path => ({
  type: SELECT_MASK,
  payload: path,
});
/*
 * Export default
*/
export default reducer;
