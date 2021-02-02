import { HttpPostClient, HttpResponse } from '../../../data/protocols/http-request';
export declare class NodeHttpPostClient implements HttpPostClient {
    post(url: string, body: Record<string, any>): Promise<HttpResponse>;
}
