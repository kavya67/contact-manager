import React from 'react'
import ReactDOM from 'react-dom'
import axios from './config/config'

import App from './App'
import {Provider} from 'react-redux'
import {setUser} from './actions/usersAction'
import configureStore from './store/configureStore'

const  store = configureStore()
store.subscribe(()=>{
    console.log('redux store state', store.getState())
})

// if(localStorage.getItem('userAuthToken')){
//     axios.get(`/users/account`, {
//         headers: {
//             'x-auth':localStorage.getItem('userAuthToken')
//         }
//     })
//     .then(response=>{
//         store.dispatch(setUser(response.data))
//     })
// }

const jsx = <Provider store={store}>
    <App/>
</Provider>

ReactDOM.render(jsx, document.getElementById('root'))