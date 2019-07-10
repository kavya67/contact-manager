import React from 'react'

const Welcome = ()=>{
    return(
       <div className = "jumbotron text-center">
            <h2 className="display-4">Welcome!</h2>
            <p className="lead">
            This is a contacts manager application with functionalities to add, edit, update, delete contacts.
            The frontend of the application is written in ReactJS along with redux and bootstrap.</p>
            <p>Application is also provided with user authentication, packages like bcryptjs, validator and jsonwebtoken are used for password encryption, email validation, and token generation.
            The database is designed the MongoDB model Schema at the backend using Mongoose.
            The server-side application is developed using Express JS framework and followed MVC architecture.
            </p>
       </div>
       
    )
}

export default Welcome