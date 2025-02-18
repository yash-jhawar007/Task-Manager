const express = require('express');
const router = express.Router();
const {getAllTasks, getTask, createTasks, updateTask, deleteTask} = require('../controller/tasks')

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router; 