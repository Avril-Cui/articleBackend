import { auth, provider } from "../firebase-config"
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
    let nevigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            nevigate("/")
        });
    };

    return(
        <div className="loginPage">
            <p>Sign In With Google to Continue</p>
            <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In With Goggle</button>
        </div>
    );
}

export default Login;