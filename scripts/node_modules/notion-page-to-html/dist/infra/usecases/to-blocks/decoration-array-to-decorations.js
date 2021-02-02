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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecorationArrayToDecorations = void 0;
var DecorationArrayToDecorations = /** @class */ (function () {
    function DecorationArrayToDecorations(decorationsArray) {
        this._decorationsArray = decorationsArray;
    }
    DecorationArrayToDecorations.prototype.toDecorations = function () {
        if (!this._decorationsArray)
            return [];
        return this._decorationsArray.map(function (decorations) {
            var type = decorations[0], value = decorations[1];
            return __assign({ type: fromDecorationArrayTypeToDecorationType[type] || 'plain' }, (value && { value: value }));
        });
    };
    return DecorationArrayToDecorations;
}());
exports.DecorationArrayToDecorations = DecorationArrayToDecorations;
var fromDecorationArrayTypeToDecorationType = {
    b: 'bold',
    i: 'italic',
    _: 'underline',
    s: 'strikethrough',
    c: 'code',
    a: 'link',
    e: 'equation',
    h: 'color',
};
//# sourceMappingURL=decoration-array-to-decorations.js.map