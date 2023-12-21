import { useEffect } from "react";
import { UserAuth } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const { currentUser, signinWithGoogle } = UserAuth()
    console.log(currentUser);

    const handleLogin = async () => {
        try {
            await signinWithGoogle();
            //console.log(currentUser);
        } catch (error) {
            console.log(error);
        };
    }

    useEffect(() => {
        if(currentUser) {
            navigate("/chat");
        }
    }, [currentUser]);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-6xl font-bold">Hello There 👋👋</h1>
                    <p className="py-6 font-bold">Log-In with your Google Account to lodge any complaints or chat with Eavesdrop's Help Desk</p>
                    <button onClick={handleLogin} className="btn btn-active btn-neutral">Login With Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login