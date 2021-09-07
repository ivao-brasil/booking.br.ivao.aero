import axios, { AxiosInstance } from 'axios'

export class HttpClient {
    private client: AxiosInstance

    constructor(baseURL: string) {
        this.client = axios.create({ baseURL })
    }

    get<T>(url: string, params?: { [key: string]: string | undefined }, headers?: object): Promise<T> {
        let queryString = undefined;
        let endpointRequest = `${url}`;

        if (params) {
            const keyValue = Object.keys(params)
                .filter((key) => params[key])
                .map((key) => `${key}=${params[key]}`);
            queryString = keyValue.join('&');
            endpointRequest = `${url}?${queryString}`;
        }


        return this.client.get(endpointRequest, { headers: headers }).then(response => response.data);
    }

    post<T>(url: string, body: object, headers?: object): Promise<T> {
        return this.client.post(url, body, { headers }).then(response => response.data)
    }

    put<T>(url: string, body: object, headers?: object): Promise<T> {
        return this.client.put(url, body, { headers }).then(response => response.data)
    }
}