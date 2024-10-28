const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const port = 3000;
 
// Middleware to parse JSON bodies
app.use(express.static('./public'));
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)

// app.get('./api/v1/tasks', (req,res)) => get all the tasks
// app.post('./api/v1/tasks') => create new tasks
// app.get('./api/v1/tasks/:id') => get a single task
// app.patch('./api/v1/tasks/:id') => update a single task
// app.delete('./api/v1/tasks:id') => delete a single task
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`the server is listening at port ${port}`))
    } catch (error) {
        console.log(error)        
    }
};

start();
