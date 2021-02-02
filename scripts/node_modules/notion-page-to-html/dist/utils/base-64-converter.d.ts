export declare class Base64Converter {
    private readonly _imageSource;
    constructor(imageURL: string);
    static convert(imageURL: string): Promise<string>;
    _convert(): Promise<string>;
}
