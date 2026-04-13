import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// This layout component is used to wrap the content of each page with the navbar and footer
export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>
            {children}
            </main>
            <Footer />
        </>
    );
}