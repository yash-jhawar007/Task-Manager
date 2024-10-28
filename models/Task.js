const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength: [20,"name cannot be more than 20 characters"],
    },
    completed:{
        type: Boolean,
        default: false,
    },
})

// here, the tasks is the name of the property/ collection name in the MongoDB cloud storage
module.exports = mongoose.model('tasks', taskSchema)