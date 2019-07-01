// const stateInitialValue = [{
//     name: "rithes",
//     email:"rithes@gmail.com",
//     number:"123456789"
// }]
const contactsReducer = (state = [], action)=>{
    switch(action.type){
        case 'SET_CONTACT': {
            console.log('acc reducer',action.payload)
            return [...action.payload]
        }
        case 'ADD_CONTACT': {
            return [...state, action.payload]
        }
        case 'REMOVE_CONTACT': {
            return state.filter(contact=>{
                return contact._id !== action.payload
            })
        }
        default: {
            return [...state]
        }
    }

    

}

export default contactsReducer