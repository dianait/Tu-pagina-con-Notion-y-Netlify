"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotionApiContentResponsesToBlocks = void 0;
var prop_title_to_decorable_texts_1 = require("../to-blocks/prop-title-to-decorable-texts");
var format_filter_1 = require("./format-filter");
var properties_parser_1 = require("./properties-parser");
var NotionApiContentResponsesToBlocks = /** @class */ (function () {
    function NotionApiContentResponsesToBlocks(notionApiContentResponses) {
        this._notionApiContentResponses = notionApiContentResponses;
    }
    NotionApiContentResponsesToBlocks.prototype.toBlocks = function () {
        if (!this._notionApiContentResponses)
            return [];
        return this._notionApiContentResponses.map(function (nacr) {
            var _a;
            return ({
                id: nacr.id,
                type: nacr.type,
                format: new format_filter_1.FormatFilter(nacr.format).filter(),
                properties: new properties_parser_1.PropertiesParser(nacr.format, nacr.properties).parse(),
                children: new NotionApiContentResponsesToBlocks(nacr.contents).toBlocks(),
                decorableTexts: new prop_title_to_decorable_texts_1.PropTitleToDecorableTexts((_a = nacr.properties) === null || _a === void 0 ? void 0 : _a.title).toDecorableTexts(),
            });
        });
    };
    return NotionApiContentResponsesToBlocks;
}());
exports.NotionApiContentResponsesToBlocks = NotionApiContentResponsesToBlocks;
//# sourceMappingURL=notion-api-content-response-to-blocks.js.map