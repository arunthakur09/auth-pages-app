import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export default function EmailForm() {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Added error state
  const router = useRouter();
  const { setEmail } = useAuth();

  const onSubmit = (data) => {
    setEmail(data.email);
    // Redirect to step 2
    router.push('/SignUpStep2');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="font-testSoehne block items-center w-full max-w-lg mx-auto">
      <div className="flex-grow">
        <input
          id="email"
          type="email"
          placeholder="Email"
          className={`w-full mb-4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Please enter a valid email address',
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-black text-white py-4 px-16 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 float-right"
      >
        Continue
      </button>
    </form>
  );
}
