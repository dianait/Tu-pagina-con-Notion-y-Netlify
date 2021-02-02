"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageBlockToTitle = void 0;
var PageBlockToTitle = /** @class */ (function () {
    function PageBlockToTitle(pageBlock) {
        this._pageBlock = pageBlock;
    }
    PageBlockToTitle.prototype.toTitle = function () {
        var _a;
        return ((_a = this._pageBlock.decorableTexts[0]) === null || _a === void 0 ? void 0 : _a.text) || '';
    };
    return PageBlockToTitle;
}());
exports.PageBlockToTitle = PageBlockToTitle;
//# sourceMappingURL=page-block-to-title.js.map