import Head from 'next/head';
import { useContext } from 'react'
import cartContext from '../context/CartContext';

/* Sam will have his state management here, really important when we show the user the words they bought */

export default function Cart() {
  //This will grab the car list from the context and show it to the user.
  const { cart } = useContext(cartContext);

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
          {/* if the cart is empty it will show a message if not it will show the word. */}
          {cart.length === 0 ? (
            // this is the message that will show if the cart is empty.
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            //This will loop each item inside the cart array.
            cart.map((item, index) => (
              //This creates a list item for each word in the cart, showing the word name.
              <li
                key={index}
                className="border p-4 mb-2 rounded shadow">
                {/* this will display the word. */}
                {item.word}
              </li>
            ))
          )}
          <p className="max-w-md mx-auto text-gray-600">
            ------nb The selected words will be here whenever state management is added.
          </p>
        </div>
      </main>
    </div>
  );
}
