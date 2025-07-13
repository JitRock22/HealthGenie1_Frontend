import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { CheckCircle, XCircle, Eye, EyeOff, X } from 'lucide-react';

const SignupModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Password checks
  const checkLength = password.length >= 8;
  const checkUpper = /[A-Z]/.test(password);
  const checkNumber = /[0-9]/.test(password);
  const checkSpecial = /[!@#$%^&*]/.test(password);

  const getIcon = (condition) =>
    condition ? (
      <CheckCircle className="text-green-600 w-5 h-5" />
    ) : (
      <XCircle className="text-red-500 w-5 h-5" />
    );

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!checkLength || !checkUpper || !checkNumber || !checkSpecial) {
      setErrorMsg('Password does not meet all criteria.');
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(user);
      setSuccessMsg('Account created! Please verify your email.');
      setEmail('');
      setPassword('');
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Create Account</h2>

        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full border p-2 rounded mb-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          {/* Password Criteria */}
          <div className="text-sm text-gray-700 mb-4 mt-2">
            <p className="font-semibold mb-1">🔐 Password must include:</p>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">{getIcon(checkLength)} 8+ characters</li>
              <li className="flex items-center gap-2">{getIcon(checkUpper)} One uppercase letter</li>
              <li className="flex items-center gap-2">{getIcon(checkNumber)} One number</li>
              <li className="flex items-center gap-2">{getIcon(checkSpecial)} One special character</li>
            </ul>
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark w-full mt-2"
          >
            Sign Up
          </button>
        </form>

        {/* Firebase error or success messages */}
        {errorMsg && (
          <div className="mt-4 text-red-600 bg-red-100 border border-red-300 p-2 rounded text-sm text-center">
            {errorMsg.replace('Firebase: ', '')}
          </div>
        )}

        {successMsg && (
          <div className="mt-4 text-green-600 bg-green-100 border border-green-300 p-2 rounded text-sm text-center">
            {successMsg}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupModal;
