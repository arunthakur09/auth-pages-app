import EmailForm from '../components/EmailForm';
import Footer from '../components/Footer';
import Logo from '../public/Logos/Logo.svg';

export default function SignUpStep1() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-testSoehne">
      <main className="flex items-center justify-center flex-grow">
        <div className="relative bg-white py-12 px-16 rounded-3xl shadow-lg flex items-start">
            <div className="absolute mb-4">
              <img src={Logo.src} alt="Logo" className="h-12" />
            </div>
          <>
          <div className="w-3/4 pr-64 mt-24">
            <h2 className="text-lg mb-2 uppercase tracking-wide">STEP 1</h2>
            <h3 className="text-3xl font-bold mb-6">Enter your email address to continue</h3>
            <p className="text-black-500 mb-8 leading-relaxed">
              Log in to your account. If you don’t have one, you will be prompted to create one.
            </p>
          </div>
          <div className="w-3/4 flex flex-col space-y-4 mt-24">
            <EmailForm layout="stacked" />
          </div>
          </>
        </div>
      </main>
      <Footer />
    </div>
  );
}
