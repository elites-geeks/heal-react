import { createStore, combineReducers} from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';
const reducers = combineReducers({
    userReducer
})
const store = ()=>{
    return createStore(reducers)
}

export default store;