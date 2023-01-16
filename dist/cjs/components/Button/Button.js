"use strict";
exports.__esModule = true;
exports.MyButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignSelf: 'flex-start',
        flexGrow: 0,
        backgroundColor: 'purple'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonContainer: {
        alignItems: 'flex-start',
        flex: 1
    }
});
var MyButton = function (_a) {
    var text = _a.text, onPress = _a.onPress, color = _a.color, textColor = _a.textColor;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.buttonContainer },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.button, !!color && { backgroundColor: color }], onPress: onPress, activeOpacity: 0.8 },
            react_1["default"].createElement(react_native_1.Text, { style: [styles.buttonText, !!textColor && { color: textColor }] }, text))));
};
exports.MyButton = MyButton;
//# sourceMappingURL=Button.js.map