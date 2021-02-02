"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropTitleToDecorableTexts = void 0;
var decoration_array_to_decorations_1 = require("./decoration-array-to-decorations");
var PropTitleToDecorableTexts = /** @class */ (function () {
    function PropTitleToDecorableTexts(title) {
        this._title = title;
    }
    PropTitleToDecorableTexts.prototype.toDecorableTexts = function () {
        if (!this._title)
            return [];
        return this._title.map(function (richText) {
            var text = richText[0].toString();
            var decorationsArray = richText[1];
            return {
                text: text,
                decorations: new decoration_array_to_decorations_1.DecorationArrayToDecorations(decorationsArray).toDecorations(),
            };
        });
    };
    return PropTitleToDecorableTexts;
}());
exports.PropTitleToDecorableTexts = PropTitleToDecorableTexts;
//# sourceMappingURL=prop-title-to-decorable-texts.js.map