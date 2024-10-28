const Task = require('../models/Task')

//getAllTasks is a function
const getAllTasks = async (req,res)=>{
    try {
        // the find function gets us all the objects present in the document/ collection(tasks)
        const tasks = await Task.find({})
        res.status(200).json({tasks:tasks})
    } catch (error) {
        res.status(500).json({msg:error})        
    }
}

const createTasks = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})        
    }
}
const getTask = async (req,res)=>{
    try {
        // here the id param has been alias to taskID
        const {id:taskID} = req.params;
        
        const task = await Task.findOne({_id:taskID})

        if(!task){
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }
        
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})        
    }
}
const updateTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params;
        
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new: true,
            runValidators: true,
        })
        if(!task){
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})        
    }
}
const deleteTask = async (req,res)=>{
    try {
        // here the id param has been alias to taskID
        const {id:taskID} = req.params;
        
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }

        // the below 3 are different types of responses which we can send as a response
        // res.status(200).json({task})
        // res.status(200).send()
        res.status(200).json({task:null, status: 'success'})
    } catch (error) {
        res.status(500).json({msg:error})        
    }

}

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
}