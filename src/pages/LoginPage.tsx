import {LoadingIndicator} from "components/LoadingIndicator/LoadingIndicator";
import {useContext, useEffect} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export default function LoginPage() {
  const [urlParams] = useSearchParams();
  const ivaoAuthCode = urlParams.get("IVAOTOKEN");

  const {signIn, signed, token, openIdInfo} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (signed) {
      const redirectPath = urlParams.get("redirect") || "/";
      navigate(redirectPath, {replace: true});
    }
  }, [signed, urlParams, navigate]);

  useEffect(() => {
    if (!openIdInfo || !openIdInfo.authorizationEndpoint) {
      return;
    }

    if (token) {
      return;
    }

    if (ivaoAuthCode) {
      signIn(ivaoAuthCode);
      return;
    }

    let locationState: { from?: Location } | null = null;
    if (typeof location.state === "object") {
      locationState = location.state;
    }

    const baseUrl = window.location.href;
    let loginUrl = `${openIdInfo?.authorizationEndpoint}?client_id=&redirect_uri=${encodeURIComponent(baseUrl)}`;

    const redirectPath = locationState?.from?.pathname;
    if (redirectPath) {
      loginUrl += "?redirect=" + redirectPath;
    }

    window.location.href = loginUrl;
  }, [signIn, token, location.state, openIdInfo, ivaoAuthCode]);

  return (
    <LoadingIndicator/>
  );
}
