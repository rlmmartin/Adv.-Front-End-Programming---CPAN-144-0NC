import FooterLogo from "./FootLogo";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    //footer container
    <footer className="footer">

      {/*the main footer content*/}
      <div className="footer-container">

        {/*a separate component for the footer logo*/}
        <FooterLogo />

        {/*a separate component for social media icons*/}
        <FooterSocials />

      </div>

      <div className="footer-bottom">
        © 2026 Words Mall. All rights reserved.
      </div>

    </footer>
  );
}