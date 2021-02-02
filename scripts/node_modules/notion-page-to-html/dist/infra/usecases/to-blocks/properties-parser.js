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
exports.PropertiesParser = void 0;
var PropertiesParser = /** @class */ (function () {
    function PropertiesParser(format, properties) {
        this._format = format || {};
        this._properties = properties || {};
    }
    PropertiesParser.prototype.parse = function () {
        var _this = this;
        var avaliableKeys = Object.keys(__assign(__assign({}, this._format), this._properties)).filter(function (k) {
            return KEYS_TO_PRESERVE.includes(k);
        });
        return avaliableKeys.reduce(function (format, key) {
            var _a;
            var _b, _c;
            return (__assign(__assign({}, format), (_a = {}, _a[key] = ((_c = (_b = _this._properties[key]) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c[0]) || _this._format[key], _a)));
        }, {});
    };
    return PropertiesParser;
}());
exports.PropertiesParser = PropertiesParser;
var KEYS_TO_PRESERVE = ['source', 'caption', 'language', 'checked', 'page_icon', 'page_cover'];
//# sourceMappingURL=properties-parser.js.map