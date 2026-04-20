//April 19, edited so that lazy loading is there, by raymond

import Navbar from "../components/Navbar";
import dynamic from 'next/dynamic';

// This is Lazy Loading: the Footer will only load when needed
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <p>Loading Footer...</p>,
  ssr: false, // This ensures it only loads on the client side
});

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