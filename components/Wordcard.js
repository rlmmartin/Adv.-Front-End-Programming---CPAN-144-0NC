// The comments here arent very good, i'll clean it up later (Raymond April 11)

import Link from 'next/link'; /* April 11th: Imported Link for the dynamic routing */

/* April 9th: i forgot who's responsibility this was, but i updated it, Raymond Apr 9 */
export default function WordCard({ word, definition, onBuy }) {
  return (
    // April 9th: main card container
    /* April 9th: Added by raymond for the blue/gold word box style */
    <div className="word-card-box">

      {/* April 11th: Wrapped the word title in a Link component so clicking it takes you to the new details page */}
      <Link href={`/words/${word.toLowerCase()}`}>
        {/* April 9th: display the word */}
        {/* April 9th: Added by raymond for proper header scaling */}
        {/* April 11th: Added cursor-pointer and hover colors so users know it is clickable now */}
        <h2 className="capitalize cursor-pointer hover:text-blue-500 transition-colors">
          {word}
        </h2>
      </Link>
      
      {/* April 9h: display the definition */}
      {/* April 9th: Added by raymond for consistent blue text and italic style, so everything looks nice */}
      <p className="italic">
        "{definition}"
      </p>
      
      {/* April 9h: button to add word to cart */}
      {/* April 9th: Added by raymond for the very nice button theme */}
      <button 
        onClick={onBuy}
        className="btn-mall mt-4"
      >
        Buy Word
      </button>

    </div>
  );
}