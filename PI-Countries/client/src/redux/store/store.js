import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
 // Creamos el store con el reducer y el middleware
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;