/* i forgot who's responsibility this was, but i updated it, Raymond Apr 9 */

export default function WordCard({ word, definition, onBuy }) {
  return (
    // main card container
    /* Added by raymond for the blue/gold word box style */
    <div className="word-card-box">

      {/* display the word */}
      {/* Added by raymond for proper header scaling */}
      <h2 className="capitalize">
        {word}
      </h2>
      
      {/* display the definition */}
      {/* Added by raymond for consistent blue text and italic style, so everything looks nice */}
      <p className="italic">
        "{definition}"
      </p>
      
      {/* button to add word to cart */}
      {/* Added by raymond for the very nice button theme */}
      <button 
        onClick={onBuy}
        className="btn-mall mt-4"
      >
        Buy Word
      </button>

    </div>
  );
}