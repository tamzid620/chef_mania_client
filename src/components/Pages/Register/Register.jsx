import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePhotoUrlChange = (event) => {
        setPhotoUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        if (email && password) {
            console.log(email, password);
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                    const user = userCredential.user;
                    console.log(user, userCredential);
                })
                .catch((error) => {
                    console.log(error);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
            event.preventDefault();
        } else {
            return;
        }

    };

    return (
        <div className="min-h-screen flex justify-center items-center  mt-20 mb-20">
            <div className="max-w-md w-full">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="block w-full border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
                            placeholder="your name"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="block w-full border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
                            placeholder="you@example.com"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="block w-full border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
                            placeholder="****"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="photo-url"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photo-url"
                            name="photo-url"
                            className="block w-full border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus
              :outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
                            placeholder="https://example.com/photo.jpg"
                            value={photoUrl}
                            onChange={handlePhotoUrlChange}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <Link to="/login" className="font-medium text-gray-900 hover:text-gray-700"> Back to login</Link>
                        </div>

                        <Link to="/forgot-password" className="font-medium text-gray-900 hover:text-gray-700">Forgot Password</Link>
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-black">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;