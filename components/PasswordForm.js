import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export default function PasswordForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { setPassword } = useAuth();

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  const onSubmit = async (data) => {
    setPassword(data.password);
    try {
      const response = await axios.post('https://untitled-twkmuar27a-uc.a.run.app/api/login/', {
        username: "testadmin",  // Hardcoded credentials for testing
        password: "testadmin"
      });
      const token = response.data.token;
      console.log('Token:', token);
      setCookie("authToken", token, 7);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert("Login failed. Please try again."); // Added user feedback for failed login
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="font-testSoehne">
      <div className="relative mb-4">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Choose a password"
          className={`w-full p-3 border rounded ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          }`}
          {...register('password', { 
            required: 'Password is required', 
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long'
            }
          })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-600"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
        {errors.password && (
          <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-white py-4 px-16 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 float-right"
      >
        Agree & Continue
      </button>
    </form>
  );
}
