import React from "react";
import { ApiClient } from "clients/api.client";
import { DefaultButton } from "components/Button";
import Navbar from "components/Navbar";

export default function Home() {
    const apiClient = new ApiClient();

    return (
        <div className="w-screen h-screen overflow-hidden" style={{ background: `url(${apiClient.getMainBanner()})` }}>
            <Navbar />
            <div className="h-full flex flex-col items-center justify-center">
                <DefaultButton size="lg">Login</DefaultButton>
            </div>
        </div>
    )
}