'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff, Plane } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-neutral-900/60 to-black/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Welcome Section */}
        <div className="hidden md:flex flex-col justify-center text-white space-y-6 p-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <Plane className="w-12 h-12 text-red-500" strokeWidth={1.5} />
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Fujairah Airport</h1>
              <p className="text-red-400 text-sm">Your Gateway to the World</p>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold leading-tight">
            Welcome Back,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              Traveler
            </span>
          </h2>
          
          <p className="text-lg text-neutral-300 leading-relaxed max-w-md">
            Access your account to manage bookings, check flight status, and explore exclusive benefits at Fujairah International Airport.
          </p>

          <div className="flex gap-4 pt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-red-500">24/7</span>
              <span className="text-sm text-neutral-400">Support</span>
            </div>
            <div className="w-px bg-neutral-700" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-red-500">50+</span>
              <span className="text-sm text-neutral-400">Destinations</span>
            </div>
            <div className="w-px bg-neutral-700" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-red-500">100%</span>
              <span className="text-sm text-neutral-400">Secure</span>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form with Glassmorphism */}
        <div className="w-full max-w-md mx-auto">
          <div 
            className="relative backdrop-blur-3xl bg-white/50 rounded-3xl p-8 shadow-2xl border border-white/50"
            style={{
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            }}
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-2">Sign In</h3>
                <p className="text-black">Access your travel dashboard</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-black/90">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black/50">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3.5 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-black/90">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black/50">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-12 py-3.5 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-black/50 hover:text-black transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer text-black/90">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-white/30 bg-white/10 text-red-600 focus:ring-red-500/50 focus:ring-offset-0"
                    />
                    <span>Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-red-400 hover:text-red-300 transition-colors">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl shadow-lg shadow-red-900/30 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Sign In
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-transparent text-white/60">Or continue with</span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-black hover:bg-white/40 transition-all"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-sm font-medium">Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-black hover:bg-white/40 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/>
                    </svg>
                    <span className="text-sm font-medium">Facebook</span>
                  </button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center pt-4">
                  <p className="text-white/80">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-red-400 hover:text-red-300 font-semibold transition-colors">
                      Create Account
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Note */}
          <p className="text-center text-white/60 text-xs mt-6">
            By signing in, you agree to our{' '}
            <Link href="/terms" className="text-red-400 hover:text-red-300">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-red-400 hover:text-red-300">Privacy Policy</Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}