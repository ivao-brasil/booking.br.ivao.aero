import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
    const [urlParams] = useSearchParams();
    const ivaoToken = urlParams.get("IVAOTOKEN");

    const { signIn } = useContext(AuthContext);
    const { signed, token } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (signed) {
            const redirectPath = urlParams.get("redirect") || "/";
            navigate(redirectPath, { replace: true });
        }
    }, [signed, urlParams, navigate]);

    useEffect(() => {
        if (token) {
            return;
        }

        const redirectUrlParam = urlParams.get("redirect");
        if (redirectUrlParam && redirectUrlParam.indexOf("IVAOTOKEN") !== -1) {
            /*
                Se o servidor estiver rodando em localhost:3000, o site de login da IVAO irá redirecionar com uma query inválida
                Ex: new URLSearchParams(window.location.search).get("redirect") = /?IVAOTOKEN=error
            */
            throw new Error(`The IVAO Login service rejected the request. The server is in ivao.aero domain? Token query: ${redirectUrlParam}`);
        }

        if (ivaoToken) {
            signIn(ivaoToken);
            return;
        }

        let locationState: { from?: Location } | null = null;
        if (typeof location.state === "object") {
            locationState = location.state;
        }

        const ivaoLoginUrl = "https://login.ivao.aero/index.php?url={url}";
        const baseUrl = window.location.href;
        let loginUrl = ivaoLoginUrl.replace("{url}", `${baseUrl}`);

        const redirectPath = locationState?.from?.pathname;
        if (redirectPath) {
            loginUrl += "?redirect=" + redirectPath;
        }

        window.location.href = loginUrl;
    }, [ivaoToken, urlParams, signIn, token, location.state]);

    return (
        <LoadingIndicator />
    );
}
