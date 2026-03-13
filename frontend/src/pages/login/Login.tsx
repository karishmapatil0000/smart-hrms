import React, { useState } from "react";
import type { FormErrors, LoginFormValues } from "../../components/types/auth";

const Login = () => {
  const [formData, setFormData] = useState<LoginFormValues>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (formData.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("FastAPI Login Request:", formData);
      // Here you would call: axios.post('/api/v1/login', formData)
    }
  };

  return (
    <div className="flex min-h-screen font-inter">
      <div className="hidden md:flex w-1/2 bg-blue-600 items-center justify-center p-12 text-white">
        <div className="max-w-md">
          <div className="bg-white/20 p-4 rounded-xl w-fit mb-6">
            <span className="text-3xl font-bold">HRMS</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Manage your workforce with AI power.
          </h1>
          <p className="text-blue-100">
            Streamline recruitment, attendance, and payroll in one unified
            platform.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-1/2 bg-white p-8 rounded-2xl shadow-sm border bg-gray-100 ">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Welcome Back
          </h2>
          <p className="text-gray-500 mb-8">
            Enter your credentials to access your account
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-200"} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                placeholder="name@company.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className={`w-full px-4 py-3 rounded-xl border ${errors.password ? "border-red-500" : "border-gray-200"} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                placeholder="••••••••"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormData({ ...formData, rememberMe: e.target.checked })
                  }
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
