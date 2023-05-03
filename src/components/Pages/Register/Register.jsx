import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faPerson, } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    const [error, setError] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo_url = form.photo_url.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, photo_url, email, password, confirm);

        if (password.length < 6) {
            setError('password must be six character or longer');
            return;
        } 
        else  if (password !== confirm){
            setError('password did not match');
            return;
        }

    }

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center mt-20 mb-20">
                <div className="max-w-md w-full">
                    <h1 className="text-3xl font-bold text-green-700 mb-6">Register</h1>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-bold mb-2">
                                Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon icon={faPerson} className="text-gray-400" />
                                </div>
                                <input type="text" id="text" name="name" className="block w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm" placeholder="your name" required />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="photo_url"
                                className="block text-gray-700 font-bold mb-2">
                                Photo_Url
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon icon={faPerson} className="text-gray-400" />
                                </div>
                                <input type="text" id="text" name="photo_url" className="block w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm" placeholder="import your photo url" required />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                                </div>
                                <input type="email" id="email" name="email" className="block w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm" placeholder="you@example.com" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                                </div>
                                <input type="password" id="password" name="password" className="block w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm" placeholder="****" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirm" className="block text-gray-700 font-bold mb-2">Confirm Password </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                                </div>
                                <input type="password" id="password" name="confirm" className="block w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm" placeholder="****" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="w-full bg-green-700 text-white rounded-md py-2 font-bold"
                            >
                                Register
                            </button>
                        </div>
                        <p className='text-red-500'>{error}</p>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link to="/login" className="font-medium text-gray-900 hover:text-gray-700"> Back to login</Link>
                            </div>

                            <Link to="/forgot-password" className="font-medium text-gray-900 hover:text-gray-700">Forgot Password</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;