import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';
const reducers = combineReducers({
    userReducer
})
const store = ()=>{
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store;