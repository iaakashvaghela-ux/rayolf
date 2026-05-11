"use client";

import React, { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F6F2] p-4 font-sans">
      {/* Main Container */}
      <div className="max-w-md w-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-10 border border-stone-100">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="../images/rayolf-logo.png" alt="Logo" className="h-26" />
        </div>
        
         {/* Heading */}
        <h2 className="text-center text-[1.15rem] font-medium text-stone-500 mb-8 tracking-wide">
          Login to your Rayolf account
        </h2>

        <form className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-[1.15rem] w-[1.15rem] text-stone-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="email"
              className="block w-full pl-12 pr-4 py-[0.85rem] bg-white border border-stone-200 rounded-xl text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all text-[0.95rem]"
              placeholder="Email Address"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-[1.15rem] w-[1.15rem] text-stone-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              className="block w-full pl-12 pr-12 py-[0.85rem] bg-white border border-stone-200 rounded-xl text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all text-[0.95rem]"
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-4 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg className="h-5 w-5 text-stone-300 hover:text-stone-500 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0l-3.29-3.29" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-stone-300 hover:text-stone-500 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Options (Remember me & Forgot Password) */}
          <div className="flex items-center justify-between pt-1 pb-2">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-[1.1rem] w-[1.1rem] text-[#222222] focus:ring-[#222222] border-stone-300 rounded cursor-pointer accent-[#222222]"
              />
              <label htmlFor="remember_me" className="ml-2.5 block text-[0.7rem] text-stone-500 cursor-pointer">
                Remember me
              </label>
            </div>

            <div className="text-[0.7rem]">
              <a href="#" className="font-medium text-stone-500 hover:text-stone-800 transition-colors">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-[0.85rem] px-4 border border-transparent rounded-xl shadow-sm text-[0.95rem] font-medium text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A] transition-all tracking-wide"
            >
              LOG IN
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="mt-8 mb-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-stone-400 font-medium">OR</span>
          </div>
        </div>

        {/* Social Logins */}
        <div className="space-y-3.5">
          <button
            type="button"
            className="w-full inline-flex justify-center items-center py-[0.8rem] px-4 border border-stone-200 rounded-xl bg-white text-[0.95rem] font-medium text-stone-700 hover:bg-stone-50 hover:border-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-stone-200 transition-all"
          >
            <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            Continue with Google
          </button>

          <button
            type="button"
            className="w-full inline-flex justify-center items-center py-[0.8rem] px-4 border border-stone-200 rounded-xl bg-white text-[0.95rem] font-medium text-stone-700 hover:bg-stone-50 hover:border-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-stone-200 transition-all"
          >
            <svg className="h-5 w-5 mr-3 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.87 3.46-.8 1.93.06 3.2.82 4.16 2.07-3.28 1.93-2.73 6.17.48 7.42-.76 1.83-1.89 3.8-3.18 3.48zm-3.05-15.5c-.32 1.6-1.55 3.05-3.03 3.25-.32-1.66 1.05-3.21 2.89-3.41.05.05.1.1.15.16z" />
            </svg>
            Continue with Apple
          </button>
        </div>

        
      </div>
    </div>
  );
}
