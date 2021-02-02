import { Block } from '../../protocols/blocks';
export declare class PageBlockToTitle {
    private readonly _pageBlock;
    constructor(pageBlock: Block);
    toTitle(): string;
}
