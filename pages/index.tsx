import Link from 'next/link';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-100 to-gray-200">
      <main className="flex items-center justify-center flex-grow">
        <div className="bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full text-center transform transition-transform duration-500 hover:scale-105">
          <h1 className="text-4xl font-extrabold mb-8 text-gray-800">
            Welcome to the Authentication Flow
          </h1>
          <Link href="/SignUpStep1">
            <span className="inline-block w-full bg-black text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-colors duration-300">
              Get Started
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
