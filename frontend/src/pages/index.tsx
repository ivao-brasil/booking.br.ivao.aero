import Link from 'next/link'
import { ApiClient } from "../clients/api.client";
import { ENV } from "../env";

export default function index() {
    const apiClient = new ApiClient();

    return (
        <div className="w-screen h-screen overflow-hidden" style={{ background: `url(${apiClient.getMainBanner()})` }}>
            <div className="flex flex-wrap items-center justify-center md:justify-start">
                <img src={apiClient.getMainLogo()} className="w-48 md:w-1/5" />
                <Link href="/events" passHref>
                    <a className="hover:underline">Event list</a>
                </Link>
            </div>

            <div className="h-full flex flex-col items-center justify-center">
                <button className="py-2 px-4 text-white w-48 h-12 font-medium bg-blue-400 shaow-md rounded-md hover:bg-blue-600">
                    Login
                </button>
            </div>
        </div>
    )
}