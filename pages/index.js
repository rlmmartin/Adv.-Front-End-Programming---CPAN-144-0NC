import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
/* So this is our homepage, yo jess, u gonna add the navigation links to catalog and cart pages here */


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Head>
        <title>WordsMall/Home</title>
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">WordsMall Inc</h1>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to WordsMall!
        </p>
        
        <div className="mt-8 p-4">
          <p className="max-w-md mx-auto text-gray-600">
            We have all of your vocabulary needs and more! Feel free to look through 
            our catalog of English Words! I am sure that it will be a 
            great learning experience!
          </p>
          
        </div>
      </main>
      
    </div>
  );
}

