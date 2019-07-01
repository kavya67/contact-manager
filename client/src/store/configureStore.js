import {createStore, combineReducers} from 'redux'
import userReducers from '../reducers/userReducers'
import contactsReducers from '../reducers/contactReducers'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        user: userReducers,
        contacts: contactsReducers
        
    }))
    return store

}

export default configureStore