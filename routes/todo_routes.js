const router = require('express').Router();
const TodoController = require('../controllers/todo_controller');

router.post("/todo", TodoController.createTodo);
module.exports = router;