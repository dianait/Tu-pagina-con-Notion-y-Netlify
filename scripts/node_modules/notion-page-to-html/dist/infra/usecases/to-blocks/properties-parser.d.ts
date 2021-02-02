export declare class PropertiesParser {
    private readonly _format;
    private readonly _properties;
    constructor(format: Record<string, any> | undefined, properties: Record<string, any> | undefined);
    parse(): Record<string, any>;
}
