const lodash = require('lodash.pick')

const person = {
    name:"kavya",
    city: "bangalore"
}

console.log(lodash(person, 'name'))