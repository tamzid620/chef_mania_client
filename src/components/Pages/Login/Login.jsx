import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
    return (
        <div className="min-h-screen flex justify-center items-center mt-20 mb-20">
            <div className="max-w-md w-full">
                <h1 className="text-3xl font-bold text-green-700 mb-6">Log in</h1>
                <form >
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
                            <input type="email" id="email" name="email" className="block w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm" placeholder="you@example.com" required/>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                            </div>
                            <input type="password" id="password" name="password" className="block w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm" placeholder="****" required/>
                        </div>
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white rounded-md py-2 font-bold"
                        >
                            Log in
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <Link to="/register" className="font-medium text-gray-900 hover:text-gray-700"> Create an account</Link>
                        </div>

                        <Link to="/forgot-password" className="font-medium text-gray-900 hover:text-gray-700">Forgot Password</Link>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blue-400 text-white rounded-md py-2 font-bold" > Google Sign-in
                        </button>

                    </div>

                    <div className="mt-5">
                        <button type="submit" className="w-full bg-gray-900 text-white rounded-md py-2 font-bold"> GitHub Sign-in </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;