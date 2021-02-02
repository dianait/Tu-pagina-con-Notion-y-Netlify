import { Block } from '../../protocols/blocks';
export declare class PageBlockToIcon {
    private readonly _pageBlock;
    constructor(pageBlock: Block);
    toIcon(): Promise<string | null>;
}
