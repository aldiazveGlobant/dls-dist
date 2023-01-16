"use strict";
exports.__esModule = true;
exports.Basic = void 0;
var tslib_1 = require("tslib");
// stories/MyButton.stories.tsx
var react_1 = tslib_1.__importDefault(require("react"));
var Button_1 = require("./Button");
exports["default"] = {
    title: 'components/MyButton',
    component: Button_1.MyButton
};
var Basic = function (args) { return (react_1["default"].createElement(Button_1.MyButton, tslib_1.__assign({}, args))); };
exports.Basic = Basic;
exports.Basic.args = {
    text: 'Hello World',
    color: 'purple'
};
//# sourceMappingURL=Button.stories.js.map