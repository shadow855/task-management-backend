const express = require('express');
const { createTask, updateTask, getTasks, taskStatus, getFilteredAndSearchedTasks } = require('../controllers/taskControllers');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/createtask').post(protect, createTask);
router.route('/gettasks').get(protect, getTasks);
router.route('/updatetask/:id').put(protect, updateTask);
router.route('/taskstatus/:id').put(protect, taskStatus);
router.route('/getfilteredandsearchedtask').get(protect, getFilteredAndSearchedTasks);

module.exports = router;