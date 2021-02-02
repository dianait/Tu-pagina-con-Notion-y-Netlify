import { Block } from '../../protocols/blocks';
export declare class ListBlocksWrapper {
    wrapLists(blocks: Block[]): Block[];
    private _isList;
    private _isFirstItemOfAList;
    private _generateListBlock;
}
