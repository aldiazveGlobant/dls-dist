import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
var styles = StyleSheet.create({
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
export var MyButton = function (_a) {
    var text = _a.text, onPress = _a.onPress, color = _a.color, textColor = _a.textColor;
    return (React.createElement(View, { style: styles.buttonContainer },
        React.createElement(TouchableOpacity, { style: [styles.button, !!color && { backgroundColor: color }], onPress: onPress, activeOpacity: 0.8 },
            React.createElement(Text, { style: [styles.buttonText, !!textColor && { color: textColor }] }, text))));
};
//# sourceMappingURL=Button.js.map