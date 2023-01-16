import { __assign } from "tslib";
// stories/MyButton.stories.tsx
import React from 'react';
import { MyButton } from './Button';
export default {
    title: 'components/MyButton',
    component: MyButton
};
export var Basic = function (args) { return (React.createElement(MyButton, __assign({}, args))); };
Basic.args = {
    text: 'Hello World',
    color: 'purple'
};
//# sourceMappingURL=Button.stories.js.map