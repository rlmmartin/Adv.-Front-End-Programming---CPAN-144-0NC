import FooterLogo from "./FootLogo";
import FooterSocials from "./FooterSocials";
import {useRef} from "react";

export default function Footer() {
  // const backTopRef = useRef<HTMLDivElement | null>(null);
  return (
    //footer container
    
    <footer className="footer">
      <button className="bttn" onClick={() => {
        window.scrollTo({
          behavior : 'smooth',
          top : 0
        })
      }}> 
          Back to top 
        </button>
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