import { Block } from '../../protocols/blocks';
import { PageProps } from '../../protocols/page-props';
export declare class PageBlockToPageProps {
    private readonly _pageBlock;
    constructor(pageBlock: Block);
    toPageProps(): Promise<PageProps>;
}
