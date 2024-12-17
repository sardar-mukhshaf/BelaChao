import React, { useState } from "react";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(username, password);

        setUsername('');
        setPassword('');
    };

    return (
        <main className="flex items-center justify-center h-screen w-full bg-gradient-to-br from-green-400 to-blue-500">
            <div className="flex items-center justify-center w-[90%] max-w-md">
                <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full">
                    {/* Header */}
                    <h1 className="text-center font-bold text-4xl text-blue-600 py-6 bg-gray-100">
                        Login
                    </h1>
                    {/* Form */}
                    <form
                        onSubmit={formHandler}
                        className="p-8 flex flex-col gap-6"
                    >
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="username"
                                className="text-gray-700 font-semibold"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                type="text"
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="password"
                                className="text-gray-700 font-semibold"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                type="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            LOGIN
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="flex justify-between items-center px-8 pb-6">
                        <a
                            href="#"
                            className="text-sm text-blue-500 hover:underline transition"
                        >
                            Forgot Password?
                        </a>
                        <a
                            href="#"
                            className="text-sm text-green-500 font-semibold hover:underline transition"
                        >
                            Create Account
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
