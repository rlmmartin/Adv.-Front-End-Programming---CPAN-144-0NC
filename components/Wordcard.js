export default function WordCard({ word, definition, onBuy }) {
  return (
    // main card container
    <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">

      {/* display the word */}
      <h2 className="text-2xl font-bold text-blue-600 capitalize">
        {word}
      </h2>
      
      {/* display the definition */}
      <p className="mt-2 text-gray-600 italic">
        "{definition}"
      </p>
      
      {/* button to add word to cart */}
      <button 
        onClick={onBuy}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 font-semibold"
      >
        Buy Word
      </button>

    </div>
  );
}