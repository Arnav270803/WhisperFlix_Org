import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const LoginPage = () => {
  const [state, setState] = useState('Login') // Fixed: useState instead of just state
  const { setShowLogin, setUser, navigate } = useContext(AppContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // Handler for switching between Login and Sign Up
  const handleStateToggle = () => {
    setState(state === 'Login' ? 'Sign Up' : 'Login')
  }

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-30 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <div className='relative bg-white p-10 rounded-xl text-slate-500 max-w-md w-full mx-4'>
        
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close"
          className="absolute top-4 right-4 w-4 h-4 hover:scale-125 cursor-pointer transition-all duration-300"
        />

        <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
        <p className="text-sm text-center mb-6">Welcome back! Please sign in to continue</p>

        {state !== 'Login' && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <lord-icon
              src="https://cdn.lordicon.com/kdduutaw.json"
              trigger="hover"
              colors="primary:#848484,secondary:#ee66aa"
            ></lord-icon>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="outline-none text-sm flex-1"
              placeholder="Full Name"
              required
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <lord-icon
            src="https://cdn.lordicon.com/vpbspaec.json"
            trigger="in"
            delay="1500"
            state="in-assembly"
            colors="primary:#545454,secondary:#e8308c"
          ></lord-icon>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="outline-none text-sm flex-1"
            placeholder="Email id"
            required
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <lord-icon
            src="https://cdn.lordicon.com/fgxwhgfp.json"
            trigger="hover"
            colors="primary:#848484,secondary:#f49cc8"
          ></lord-icon>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="outline-none text-sm flex-1"
            placeholder="Password"
            required
          />
        </div>

        {state === 'Login' && (
          <p className="text-sm text-blue-600 my-4 cursor-pointer hover:underline">
            Forgot Password?
          </p>
        )}

        <button
          disabled={loading}
          className="bg-blue-600 w-full text-white py-2 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Please wait...' : (state === 'Login' ? 'Login' : 'Create Account')}
        </button>

        {state === 'Login' ? (
          <p className="mt-5 text-center">
            Don't have an account?{' '}
            <span 
              className="text-blue-600 cursor-pointer hover:underline" 
              onClick={handleStateToggle}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Have an account?{' '}
            <span 
              className="text-blue-600 cursor-pointer hover:underline" 
              onClick={handleStateToggle}
            >
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

export default LoginPage