import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

/* Done by Raymond April 2. 
   Edited Apr 9th
*/

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Head>
        <title>WordsMall/Home</title>
      </Head>

      <main className="text-center">
      
        <h1>WordsMall Inc</h1>
        
        <p className="mt-4 font-semibold text-blue-500">
          Welcome to a new way of learning.
        </p>
        
        <div className="mt-8 p-4 max-w-lg mx-auto">
          
          <h2 className="text-2xl font-bold text-[#d4af37] mb-2">Intro</h2>
          <p className="mb-8">
            Here at WordsMall, we pride ourselves on being the best online destination for 
            learning new vocabulary and mastering the definitions of every word!
          </p>

          
          
          <h2 className="text-2xl font-bold text-[#d4af37] mb-2 mt-10">How it works</h2>
          <p className="mb-4">
            Why learn words the old, boring way with a dictionary when you can do it here? 
            Words are randomly generated and cycled in the catalog to make learning fun!
          </p>
          
          <p className="mb-4">
            You will also see the definitions for every single word generated. 
            Can you get the super long and rare ones into your cart? Roll away, my friend!
          </p>

          <p className="mb-4 italic">
            In no time, you will be speaking with a much larger vocabulary and can even 
            impress your family members with the new words you learn here.
          </p>

          
          <p className="font-bold text-lg mt-12">
            So what are you waiting for? Head over to the catalog section and give it a go!!
          </p>
          
        </div>
      </main>
      
    </div>
  );
}