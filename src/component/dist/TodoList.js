"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SingleTodo_1 = require("./SingleTodo");
require("./style.css");
function TodoList(_a) {
    var todos = _a.todos, setTodos = _a.setTodos;
    return (react_1["default"].createElement("div", { className: 'todos' }, todos.map(function (todo) { return (react_1["default"].createElement(SingleTodo_1["default"], { todo: todo, key: todo.id, todos: todos, setTodos: setTodos })); })));
}
;
exports["default"] = TodoList;
