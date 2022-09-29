const mongoose = require('mongoose');
const validator = require('validator');


const studentSchema = new mongoose.Schema({

    name: {
        type: 'string',
        required: true,
        },

    email: {
        type: 'string',
        required: true,
        unique: [true,"Id already exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email address")
            }
        }
        },
    phone:{
        type: 'Number',
        required: true,
        unique: [true,"Phone already exists"],
            },
    address: {
        type: 'string',
        required: true,
    },

})

// create a new Connections
const Student = new mongoose.model('Student',studentSchema);

module.exports = Student;