// April 19, some optimazation
import Image from 'next/image';

export default function FooterSocials() {
  return (
    <div className="footer-socials">
      {/* Optimized images with lazy loading enabled by default */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Image src="/icons/Facebook.png" alt="Facebook" width={30} height={30} className="social-icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Image src="/icons/Twitter.png" alt="Twitter" width={30} height={30} className="social-icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Image src="/icons/instagram.png" alt="Instagram" width={30} height={30} className="social-icon" />
      </a>
    </div>
  );
}