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
exports.FormatFilter = void 0;
var FormatFilter = /** @class */ (function () {
    function FormatFilter(format) {
        this._format = format || {};
    }
    FormatFilter.prototype.filter = function () {
        var _this = this;
        var presentAcceptableKeys = Object.keys(this._format).filter(function (k) { return ACCEPTABLE_KEYS.includes(k); });
        return presentAcceptableKeys.reduce(function (filteredFormat, key) {
            var _a;
            return __assign(__assign({}, filteredFormat), (_a = {}, _a[key] = _this._format[key], _a));
        }, {});
    };
    return FormatFilter;
}());
exports.FormatFilter = FormatFilter;
var ACCEPTABLE_KEYS = ['block_color', 'page_cover_position', 'block_width'];
//# sourceMappingURL=format-filter.js.map