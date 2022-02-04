"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./style.css");
;
var inputFeild = function (_a) {
    var todo = _a.todo, setTodo = _a.setTodo, handleAdd = _a.handleAdd;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var inputRef = react_1.useRef(null);
    return react_1["default"].createElement("form", { className: 'input', onSubmit: function (e) {
            handleAdd(e);
        } },
        react_1["default"].createElement("input", { type: 'input', ref: inputRef, value: todo, onChange: function (e) { return setTodo(e.target.value); }, placeholder: 'Enter a task', className: 'input__box' }),
        react_1["default"].createElement("button", { className: 'input_submit', type: 'submit' }, "Go"));
};
exports["default"] = inputFeild;
