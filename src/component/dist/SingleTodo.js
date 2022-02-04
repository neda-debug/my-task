"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/* eslint-disable react/jsx-no-undef */
var react_1 = require("react");
var bs_1 = require("react-icons/bs");
require("./style.css");
var SingleTodo = function (_a) {
    var todo = _a.todo, todos = _a.todos, setTodos = _a.setTodos;
    var _b = react_1.useState(false), edit = _b[0], setEdit = _b[1];
    var _c = react_1.useState(todo.todo), editTodo = _c[0], setEditTodo = _c[1];
    var handleDone = function (id) {
        setTodos(todos.map(function (todo) { return todo.id === id ? __assign(__assign({}, todo), { isDone: !todo.isDone }) : todo; }));
    };
    var handleDelete = function (id) {
        setTodos(todos.filter(function (todo) { return todo.id !== id; }));
    };
    var handleEdit = function (e, id) {
        e.preventDefault();
        setTodos(todos.map(function (todo) { return (todo.id === id ? __assign(__assign({}, todo), { todo: editTodo }) : todo); }));
        setEdit(false);
    };
    react_1.useEffect(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [edit]);
    var inputRef = react_1.useRef(null);
    return react_1["default"].createElement("form", { className: 'todos__single', onSubmit: function (e) { return handleEdit(e, todo.id); } },
        edit ? (react_1["default"].createElement("input", { ref: inputRef, value: editTodo, onChange: function (e) {
                return setEditTodo(e.target.value);
            }, className: 'todos__single--text' })) : todo.isDone ? (react_1["default"].createElement("s", { className: "todos__single--text" }, todo.todo)) : (react_1["default"].createElement("span", { className: "todos__single--text" }, todo.todo)),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("span", { className: "icon", onClick: function () {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                } },
                react_1["default"].createElement(bs_1.BsFillPencilFill, null)),
            react_1["default"].createElement("span", { className: "icon", onClick: function () { return handleDelete(todo.id); } },
                react_1["default"].createElement(bs_1.BsFillTrashFill, null)),
            react_1["default"].createElement("span", { className: "icon", onClick: function () { return handleDone(todo.id); } },
                react_1["default"].createElement(bs_1.BsCheckLg, null))));
};
exports["default"] = SingleTodo;
