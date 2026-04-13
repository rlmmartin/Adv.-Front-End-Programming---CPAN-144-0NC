/* Done by Samar, here shows statemanagement Apr 6 */
/* Css styling and edits by Raymond on Apr 9 */

import Head from 'next/head';
import { useContext } from 'react'
import CartContext from '../context/CartContext';


export default function Cart() {
  //This will grab the car list from the context and show it to the user.
  const { cart, removeCart } = useContext(CartContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Head>
        <title>WordsMall/Cart</title>
      </Head>

      <main className="text-center">
        <h1>Here is your wonderful words Cart</h1>
        {/* Added by raymond for consistent blue text styling */}
        <p className="mt-4">
          Here you can freely review the words that would be epic for you to buy!
        </p>
        
        <div className="mt-8 p-4 max-w-lg mx-auto">
          {/* if the cart is empty it will show a message if not it will show the word. */}
          {cart.length === 0 ? (
            // this is the message that will show if the cart is empty.
            /* Added by raymond for a themed "empty" state box */
            <div className="word-card-box opacity-60">
               <p>No words at all is in your cart. Change that</p>
            </div>
          ) : (
            //This will loop each item inside the cart array.
            /* Added by raymond: Wrapped in a list with custom mall-item styling */
            <ul className="space-y-4">
              {cart.map((item, index) => (
                //This creates a list item for each word in the cart, showing the word name.
                <li
                  key={index}
                  className="cart-item flex flex-col items-center">
                  {/* this will display the word. */}
                  <span className="font-bold text-xl">{item.word}</span>

                  <button onClick={() => removeCart(item)} 
                  className="remove-btn mt-2">
                    Remove From Cart
                  </button>
                </li>
              ))}
            </ul>
          )}
          
          {/* Added by raymond for better layout spacing at the bottom */}
          <p className="mt-12 italic">
            Remember to constantly re-roll to see if you find some super rare word
          </p>
        </div>
      </main>
    </div>
  );
}