import { PageProps } from '../../protocols/page-props/page-props';
export declare class HeaderFromTemplate {
    private readonly _pageProps;
    constructor(pageProps: PageProps);
    toHeader(): string;
    private get _coverImageHtml();
    private get _iconHtml();
    private get _titleHtml();
}
