import { HttpGetClient, HttpResponse } from '../../../data/protocols/http-request';
export declare class NodeHttpGetClient implements HttpGetClient {
    get(url: string): Promise<HttpResponse>;
}
