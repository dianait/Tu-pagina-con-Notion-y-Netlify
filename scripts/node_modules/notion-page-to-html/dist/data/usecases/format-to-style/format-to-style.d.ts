import { Format } from 'data/protocols/blocks/format';
export declare class FormatToStyle {
    private readonly _format;
    constructor(format: Format);
    toStyle(): string;
}
