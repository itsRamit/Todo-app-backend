const TodoModel = require("../models/todo_model");

class TodoServices {
  static async createTodo(userId, title, des) {
    try {
      const Todo = new TodoModel({ userId, title, des });
      return await Todo.save();
    } catch (e) {
      throw e;
    }
  }
}

module.exports = TodoServices;
