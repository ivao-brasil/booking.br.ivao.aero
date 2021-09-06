import { AppProps } from "next/app";


import '../styles/global.css'

export default function Myapp({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    )
}