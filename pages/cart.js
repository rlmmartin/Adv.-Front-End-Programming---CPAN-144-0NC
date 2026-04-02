import Head from 'next/head';

/* Sam will have his state management here, really important when we show the user the words they bought */

export default function Cart() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Head>
        <title>WordsMall/Cart</title>
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Here is your wonderful words Cart</h1>
        <p className="mt-4 text-lg text-gray-700">
          Here you can freely review the words that would be epic for you to buy!
        </p>
        <div className="mt-8 p-4">
          <p className="max-w-md mx-auto text-gray-600">
            ------nb The selected words will be here whenever state management is added.
          </p>
        </div>
      </main>
    </div>
  );
}
