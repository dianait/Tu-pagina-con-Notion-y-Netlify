import { DecorableText } from '../../../../../data/protocols/blocks/decorable-text';
export declare class Decorator {
    private readonly _decorableTexts;
    constructor(decorableTexts: DecorableText[]);
    decorate(): Promise<string>;
    _decorateByDecorableText(decorableText: DecorableText): Promise<string>;
}
