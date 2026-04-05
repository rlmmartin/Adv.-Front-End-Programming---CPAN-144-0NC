import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//ensure the navbar and footer are on every page of the website
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}