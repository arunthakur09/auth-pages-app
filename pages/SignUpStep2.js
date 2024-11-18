import PasswordForm from '../components/PasswordForm';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import Logo from '../public/Logos/Logo.svg';

export default function SignUpStep2() {
  const { authData } = useAuth();
  const { email } = authData;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-testSoehne">
      <main className="flex items-center justify-center flex-grow">
        <div className=" relative bg-white py-24 px-16 rounded-3xl shadow-lg flex items-start">
            <div className="absolute mb-4">
              <img src={Logo.src} alt="Logo" className="h-12" />
            </div>
            <>
              <div className="w-3/4 pr-64 mt-24">
                <h2 className="text-lg mb-2 uppercase tracking-wide">STEP 2</h2>
                <h3 className="text-3xl font-bold mb-6">Create an account to continue</h3>
                {email && (
                  <p className="text-lg font-medium text-gray-700 mb-4">
                    Email: {email}
                  </p>
                )}
                <p className="text-black-500 mb-8 leading-relaxed">
                  You’ll be able to log in to Dingoo with this email address and password.
                </p>
              </div>
              <div className="w-3/4 flex flex-col space-y-4 mt-24">
                <PasswordForm layout="stacked" />
              </div>
              <div className="mt-[21rem] w-auto absolute text-xxs pr-64">
                <p className="text-black-500 mb-8 leading-relaxed">
                  Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo.You can change your communication preferences anytime. We may use your data as described in our Privacy Policy,
                  including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.
                </p>
              </div>
            </>
        </div>
      </main>
      <Footer />
    </div>
  );
}
