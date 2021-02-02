import { Decoration } from '../../../data/protocols/blocks';
export declare class DecorationArrayToDecorations {
    private readonly _decorationsArray;
    constructor(decorationsArray: Array<any>);
    toDecorations(): Decoration[];
}
