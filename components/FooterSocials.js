export default function FooterSocials() {
  return (

    //container for all social media icons
    <div className="footer-socials">

      {/*opens facebook in a new tab*/}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/Facebook.png" alt="Facebook" className="social-icon" />
      </a>

      {/*opens twitter in a new tab*/}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/Twitter.png" alt="Twitter" className="social-icon" />
      </a>

      {/*opens instagram in a new tab*/}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/instagram.png" alt="Instagram" className="social-icon" />
      </a>

    </div>
  );
}