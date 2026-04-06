import Head from 'next/head';
import WordCard from '../components/Wordcard';

/* somewhere here is where the ApI logic will be and where the Cards for the words will be */

export default function Catalog() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Head>
        <title>WordsMall/Catalog</title>
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">The Creative Catalog</h1>
        <p className="mt-4 text-lg text-gray-700">
          On this page, you can search our massive dictionary and find awesome, astounding and cool words!!!
        </p>
        <div className="mt-8 p-4">
            {/* down here is where we will have a searchbar and where the words will appear */}
          <p className="max-w-md mx-auto text-gray-600">
            ------Nb. Our search bar 4 the site and the word cards will be constructed here pretty soon.
          </p>
        </div>
      </main>
    </div>
  );
}
