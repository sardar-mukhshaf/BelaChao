import React, { useState } from "react";

interface FormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Signup: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors: Partial<FormData> = {};
        if (!formData.username) validationErrors.username = "Username is required";
        if (!formData.email) validationErrors.email = "Email is required";
        if (!formData.password) validationErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = "Passwords do not match";
        }
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(true);
            console.log("Form Submitted Successfully", formData);
        }
    };

    return (
        <main className="flex items-center justify-center h-screen bg-gradient-to-br from-green-400 to-blue-500">
            <div className="flex items-center justify-center w-[90%] max-w-md">
                <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full">
                    {/* Header */}
                    <h1 className="text-center font-bold text-4xl text-blue-600 py-6 bg-gray-100">
                        Signup
                    </h1>

                    {/* Success Message */}
                    {isSubmitted && (
                        <p className="text-green-500 text-center font-semibold mb-4">
                            Registration Successful!
                        </p>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6">
                        {/* Username */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="username"
                                className="text-gray-700 font-semibold"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your username"
                                className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm">{errors.username}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-gray-700 font-semibold">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-gray-700 font-semibold">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password}</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="confirmPassword"
                                className="text-gray-700 font-semibold"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Register
                        </button>
                    </form>

                    {/* Footer Links */}
                    <div className="flex justify-center pb-6">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <a
                                href="/src/features/authentication/presentation/pages/LoginPage.tsx"
                                className="text-blue-500 font-semibold hover:underline transition"
                            >
                                Login here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;
