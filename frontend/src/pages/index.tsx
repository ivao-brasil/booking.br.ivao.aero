import { ApiClient } from "../clients/api.client";
import { ENV } from "../env";

export default function index() {
    const apiClient = new ApiClient();

    return (
        <div className="w-screen h-screen" style={{ background: `url(${apiClient.getMainBanner()})` }}>
            <div>
                <img src={apiClient.getMainLogo()} className="w-1/5" />
                {JSON.stringify(ENV)}
            </div>
        </div>
    )
}