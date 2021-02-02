import { DecorableText } from '../../../data/protocols/blocks';
export declare class PropTitleToDecorableTexts {
    private readonly _title;
    constructor(title: any[] | undefined);
    toDecorableTexts(): DecorableText[];
}
