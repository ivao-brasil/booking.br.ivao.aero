import { ENV } from "../env";
import { HttpClient } from "./http.client";

export class ApiClient {
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient(ENV.API_HOST);
    }

    getMainBanner() {
        return `${ENV.API_HOST}/banner/airport.jpg`
    }

    getMainLogo(): string {
        return `${ENV.API_HOST}/logo/tag.png`
    }
}