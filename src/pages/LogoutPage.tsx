import {LoadingIndicator} from "components/LoadingIndicator/LoadingIndicator";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export default function LogoutPage() {
  const {signOut} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    signOut();

    navigate("/");
  }, [signOut, navigate]);

  return (
    <LoadingIndicator/>
  );
}
