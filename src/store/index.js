/*
 * Npm import
*/
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

/*
 * Local Import
*/
import appReducer from '../store/reducers/appReducer';
import cameraReducer from '../store/reducers/cameraReducer';
import maskReducer from '../store/reducers/maskReducer';
import appAjax from '../store/middleware/appAjax';

/*
 * Code
*/
// Redux DevTools extension
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}
const rootReducer = combineReducers({
  appReducer,
  cameraReducer,
  maskReducer,
});
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(appAjax),
    ...devTools,
  ),
);

/*
 * Export default
*/
export default store;
