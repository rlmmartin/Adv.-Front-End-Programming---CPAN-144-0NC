/* Done by Samar, here shows statemanagement Apr 6 */
/* Css styling and edits by Raymond on Apr 9 */
// eidts april 19 by raymond

import Head from 'next/head';
import { useContext, useState } from 'react'; // Added useState for the checkout screen
import CartContext from '../context/CartContext';

export default function Cart() {
  //This will grab the car list from the context and show it to the user.
  // Added clearCart from context for Phase 3
  const { cart, removeCart, clearCart } = useContext(CartContext);

  // New state to track if the user has successfully checked out
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  // Function to handle the checkout process
  const handleCheckout = () => {
    if (cart.length > 0) {
      clearCart(); // Empties the global cart state
      setIsCheckedOut(true); // Shows the success message
    }
  };

  // If the user just checked out, show the success screen instead of the cart
  if (isCheckedOut) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl text-green-500 font-bold mb-4">Order Successful!</h1>
        <p className="mt-4 text-lg">Thank you for shopping at WordsMall.</p>
        <p className="italic text-blue-500 mb-8">Your new vocabulary is on the way!</p>
        <button onClick={() => setIsCheckedOut(false)} className="btn-mall">
          Back to Cart
        </button>
      </div>
    );
  }

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
            // Wrapped in a fragment <> to allow adding the checkout button below the list
            <>
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

              {/* Phase 3 Checkout Button */}
              <button 
                onClick={handleCheckout} 
                className="btn-mall mt-8 bg-green-600 hover:bg-green-700 w-full"
              >
                Proceed to Checkout
              </button>
            </>
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
