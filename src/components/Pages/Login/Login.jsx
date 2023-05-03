import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import {
    GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import app from "../../../firebase/firebase.config";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        if (app) {
            onAuthStateChanged(auth, (user) => {
            });
        }
    }, [app]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleLogin = () => {
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
            
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate(from, { replace: true })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
    }

    const logout = () => {
        signOut(auth)
        
            .then(() => {
            })
            .catch((error) => {
            });
    };

    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
        
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };
    const githubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div className="min-h-screen flex justify-center items-center mt-20 mb-20">
            <div className="max-w-md w-full">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Log in</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="block w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
                                placeholder="you@example.com"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="block w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
                                placeholder="****"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <button onClick={() => handleLogin()}
                            type="submit"
                            className="w-full bg-gray-900 text-white rounded-md py-2 font-bold">
                            Log in
                        </button>
                        <button onClick={() => {
                            logout();
                        }}
                            type="submit"
                            className="w-full bg-gray-900 text-white rounded-md py-2 font-bold mt-2" > Log out
                        </button>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white rounded-md py-2 font-bold flex items-center justify-center"
                            onClick={() => googleLogin()}>
                            <FaGoogle className="me-3" /> Google Sign-in
                        </button>
                    </div>

                    <div className="mt-1">
                        <button
                            type="submit"
                            className="w-full bg-black text-white rounded-md py-2 font-bold  flex items-center justify-center"
                            onClick={() => githubLogin()}>
                            <FaGithub className="me-3" /> GitHub Sign-in
                        </button>
                    </div>

                    <div className="flex items-center justify-between  mt-3">
                        <div className="text-sm">
                            <Link
                                to="/register"
                                className="font-medium text-gray-900 hover:text-gray-700"
                            > Create an account?(visit Register)</Link>
                        </div>

                        <Link
                            to="/forgot-password"
                            className="
            font-medium text-gray-900 hover:text-gray-700"
                        >
                            Forgot Password
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;