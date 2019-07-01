export const setContact = (contacts)=>{
    console.log('action',contacts)
    return {type:'SET_CONTACT', payload: contacts}
}

export const addContact = (contact)=>{
    return {type: 'ADD_CONTACT', payload: contact}
}

export const removeContact = (id)=>{
    return {type: 'REMOVE_CONTACT', payload: id}
}