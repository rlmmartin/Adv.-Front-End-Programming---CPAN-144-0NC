/* IMPORTANT */
/* The below was completed by Daniil on April 8.
Edit 1 - So far (as at April 9) only a few lines were changed, so that the css is consistent - Raymond
*/

import Head from 'next/head';
import WordCard from '../components/Wordcard';
import { useContext, useState } from 'react';
import axios from "axios";
import CartContext from '../context/CartContext'; // edit by raymond - capitalized a word


export default function Catalog() {

  const [words, setWords] = useState([]);
  const [loading, setloading] = useState(false);
  //This grabs the addtoCart function so we can add words from this page.
  const { addtoCart } = useContext(CartContext);

  // fills the "words" array with 0-5 random words 
  // (dictionary API may not have the definitions for some words)
  async function getWords() {
    // API call goes here
    let newWords = [];
    setloading(true);
    for (let i = 0; i < 5; i++) {
      try {
        // get random word
        const wordRes = await axios.get("https://api.api-ninjas.com/v2/randomword",
            {
              headers: {
                "X-Api-Key": "W3hfiC0HdKZdHFDqzxk3BQYfmdK0ekQc96NoM0u6"
              }
            }
          );
        // get definition
        const defRes = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordRes.data[0]}`);

        // get random definition
        const meanings = defRes.data[0].meanings;
        const definitions = meanings[Math.floor(Math.random() * meanings.length)].definitions;
        const randomDefinition = definitions[Math.floor(Math.random() * definitions.length)].definition;
        
        console.log(defRes)
        newWords.push({
          id: i + 1,
          word: defRes.data[0].word,
          definition: randomDefinition,
        })
      } catch {}
    }
    setloading(false);
    setWords(newWords)
  }

  // //This is just for testing this will be replaced with API - Danil
  // const testWords = [
  //   { id:1, word: "Six-Seven", definition: "67 is a 2025 viral slang term, internet meme" }
  // ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Head>
        <title>WordsMall/Catalog</title>
      </Head>

      <main className="text-center">
        <h1 >The Creative Catalog</h1>
        {/* Added by raymond for consistent global paragraph styling */}
        <p className="mt-4">
          On this page, you can search our massive dictionary and find awesome, astounding and cool words!!!
        </p>
        
        <div className="mt-8 p-4">
          {/* This will show a card for each word and when you click the buy button it will add it to the cart. */}
          {/* "Loading..." while loading words */}
          {/* "Nothing Found" if no words were found */}
          {loading 
          ? <div>Loading...</div>
          : words.length === 0
          ? <div>No words found. Click "Roll" to generate words</div>
          : words.map((item) => (
            <WordCard
              key={item.id}
              word={item.word}
              definition={item.definition}
              onBuy={() => addtoCart(item)} 
            />
          ))}
          {/* Added by raymond for blue/gold button styling */}
          <button 
            onClick={() => getWords()}
            className="btn-mall mt-4"
          >Roll</button>
        </div>
      </main>
    </div>
  );
}