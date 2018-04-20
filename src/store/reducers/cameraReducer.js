/*
 * Npm Import
 */
/*
 * Local Import
 */

/*
 * Types
 */
export const STORE_TAKEN_PICTURE = 'STORE_TAKEN_PICTURE';

/*
 * State
*/
const initialState = {
  takenPicture: '',
};

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STORE_TAKEN_PICTURE: {
      localStorage.setItem('picture', action.payload);
      return {
        ...state,
        takenPicture: action.payload,
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
export const storeTakenPictureAction = picture => ({
  type: STORE_TAKEN_PICTURE,
  payload: picture,
});
/*
 * Export default
*/
export default reducer;
