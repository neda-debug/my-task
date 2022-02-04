"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var InputFeild_1 = require("./component/InputFeild");
var TodoList_1 = require("./component/TodoList");
var App = function () {
    var _a = react_1.useState(""), todo = _a[0], setTodo = _a[1];
    var _b = react_1.useState([]), todos = _b[0], setTodos = _b[1];
    var handleAdd = function (e) {
        e.preventDefault();
        if (todo) {
            setTodos(__spreadArrays(todos, [{ id: Date.now(), todo: todo, isDone: false }]));
            setTodo("");
        }
    };
    console.log(todos);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("span", { className: 'heading' }, "My Task"),
        react_1["default"].createElement(InputFeild_1["default"], { todo: todo, setTodo: setTodo, handleAdd: handleAdd }),
        react_1["default"].createElement(TodoList_1["default"], { todos: todos, setTodos: setTodos })));
};
exports["default"] = App;
