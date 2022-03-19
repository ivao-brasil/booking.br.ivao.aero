import { FunctionComponent, useContext, useEffect } from "react";
import { AuthContext } from "context/AuthContext";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const RequireAuthGuard: FunctionComponent = () => {
    const { signed } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (signed) {
            return;
        }
        navigate("/login", { state: { from: location } });
    }, [signed, navigate, location]);

    return <Outlet />;
}