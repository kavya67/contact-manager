import {createStore, combineReducers} from 'redux'
import userReducers from '../reducers/userReducers'
import contactReducers from '../reducers/contactReducers'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        user: userReducers,
        contacts: contactReducers
        
    }))
    return store

}

export default configureStore