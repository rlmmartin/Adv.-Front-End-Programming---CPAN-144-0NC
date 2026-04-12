// Done by Raymond Apr 11, well actually the 12th
// This file here uses the useRouter hook so that we get the id for the word
// from the url that can be clicked from the catalog section, and it renders a 
//unique  page, like a profile for the word. (it is that every word has the same description but oh well)

import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function WordDetails() {
  // so i use this hook to get the id from the URL (this is for the dynamic part)
  const router = useRouter();
  const { id } = router.query; 

  // andd this fulfills the Phase 2 requirement for Dynamic Routes 
  // simply put, it allows us to show specific info for whatever word the user clicked
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Dynamic page title so the tab in the browser shows the actual word */}
      <Head>
        <title>WordsMall / {id}</title>
      </Head>

      <main className="text-center max-w-2xl">
        {/* Using capitalize here to keep the "WordsMall" nice n professional */}
        <h1 className="capitalize text-5xl mb-6">{id}</h1>
        
        {/* lastly this div uses our standard card styling for design consistency  */}
        <div className="word-card-box">
          <h2 className="text-[#d4af37] text-2xl mb-4">Word Profile</h2>
          <p className="mb-4">
            You are currently looking at the somewhat detailed view for the word <strong>"{id}"</strong>. 
          </p>
          <p className="italic text-blue-500">
            "Words are more than sound, they are meaningful, anyways, this word is nice" - A random person named jeff
          </p>
        </div>

        {/* here i have the navigation links   */}
        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/catalog" className="btn-mall">
            Back to Catalog
          </Link>
          <Link href="/cart" className="btn-mall">
            View Cart
          </Link>
        </div>
      </main>
    </div>
  );
}