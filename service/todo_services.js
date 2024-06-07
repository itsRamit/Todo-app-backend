const TodoModel = require("../models/todo_model");

class TodoServices {
  static async createTodo(userId, title, description) {
    try {
      const Todo = new TodoModel({ userId, title, description });
      return await Todo.save();
    } catch (e) {
      throw e;
    }
  }
  static async getTodo(userId) {
    try {
      const Todo = await TodoModel.find({ userId });
      return Todo;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = TodoServices;
