import Image from 'next/image';
import TwitchIcon from '../public/Icons/twitch.svg';
import TwitterIcon from '../public/Icons/twitter.svg';
import YoutubeIcon from '../public/Icons/youtube.svg';
import FacebookIcon from '../public/Icons/facebook.svg';
import InstagramIcon from '../public/Icons/instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 font-testSoehne">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">

          {/* Social Media Icons */}
          <div className="flex space-x-8 mb-12">
            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Image src={FacebookIcon} alt="Facebook Icon" width={32} height={32} className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Image src={InstagramIcon} alt="Instagram Icon" width={32} height={32} className="h-8 w-8" />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <Image src={TwitterIcon} alt="Twitter Icon" width={32} height={32} className="h-8 w-8" />
            </a>
            <a href="https://www.twitch.com" aria-label="Twitch" target="_blank" rel="noopener noreferrer">
              <Image src={TwitchIcon} alt="Twitch Icon" width={32} height={32} className="h-8 w-8" />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <Image src={YoutubeIcon} alt="YouTube Icon" width={32} height={32} className="h-8 w-8" />
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center space-x-8 text-sm mb-12">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Corporate Information</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © Alkye Test
          </div>
        </div>
      </div>
    </footer>
  );
}
