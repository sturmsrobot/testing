const axios = require("axios");

async function fetchAllTodos() {
  const result = await axios.get("http://localhost:5050/v1/todos/all");

  const todos = result.data;

  return todos;
}

async function fetchTodoById(todoId) {
  const result = await axios.get("http://localhost:5050/v1/todos/byid", {
    params: { todoId },
  });

  const todo = result.data.todo;

  console.log("Mein Todo /byid", todo);

  return todo;
}

async function fetchTodoByUserId(todoUserId) {
  const result = await axios.get("http://localhost:5050/v1/todos/byuserid", {
    params: { todoUserId },
  });

  const todo = result.data.todo.todoUserId;

  console.log("Mein Todo /byuserid", todoUserId);

  return todo;
}

module.exports = { fetchAllTodos, fetchTodoById, fetchTodoByUserId };
