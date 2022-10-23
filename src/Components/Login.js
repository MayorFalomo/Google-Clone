import { signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { Logins } from "./Style/Loginpage.styled";
import { auth, provider } from "./firebase-config";
import { AppContext } from "../Helpers/Helpers";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AppContext);

  const navigate = useNavigate();

  const icon = <FcGoogle size={30} />;

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem(isAuth, true);
        setIsAuth(true);
        navigate("/");
        const name = res.user.displayName;
        const email = res.user.email;
        const profilePic = res.user.photoURL;
        console.log(res.user.photoURL);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("photoUrl", profilePic);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Logins>
      <div>
        <h2>Welcome to Google-Clone</h2>

        <button onClick={signInWithGoogle}>{icon} Continue with Google </button>
        <p>
          This is a one-time password-less Login so you don't need a password.{" "}
        </p>
      </div>
    </Logins>
  );
};

export default Login;
