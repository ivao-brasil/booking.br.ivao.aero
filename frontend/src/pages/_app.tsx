import { AppProps } from "next/app";
import { useRouter } from "next/router";

import '../styles/global.css'

export default function Myapp({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    )
}