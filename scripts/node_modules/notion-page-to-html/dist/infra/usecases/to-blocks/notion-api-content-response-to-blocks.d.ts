import { Block } from '../../../data/protocols/blocks';
import { NotionApiContentResponse } from '../../protocols/notion-api-content-response';
export declare class NotionApiContentResponsesToBlocks {
    private readonly _notionApiContentResponses;
    constructor(notionApiContentResponses: NotionApiContentResponse[]);
    toBlocks(): Block[];
}
