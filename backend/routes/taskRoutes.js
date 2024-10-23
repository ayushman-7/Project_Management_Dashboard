const express = require('express');
const { createTask, updateTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/create', createTask);
router.put('/:id', updateTask);

module.exports = router;