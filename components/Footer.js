export default function Footer() {
  return (
    //footer container
    <footer className="footer">
      {/*main footer content*/}
      <div className="footer-container">
        {/*website name*/}
        <div className="footer-logo">Words Mall</div>
        {/*social media icons*/}
        <div className="footer-socials">

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/Facebook.png" alt="Facebook" className="social-icon" />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/Twitter.png" alt="Twitter" className="social-icon" />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.png" alt="Instagram" className="social-icon" />
          </a>

        </div>
      </div>
        {/*copyright section at the bottom*/}
      <div className="footer-bottom">
        © 2026 Words Mall. All rights reserved.
      </div>

    </footer>
  );
}