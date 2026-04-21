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

  // get words state to save catalog words even after going to other pages
  const { words, setWords } = useContext(CartContext);
  const [loading, setloading] = useState(false);
  const [search, setSearch] = useState("");
  //This grabs the addtoCart function so we can add words from this page.
  const { addtoCart, cart } = useContext(CartContext);
  const WORDS_PER_ROLL = 10;

  // fills the "words" array with 0-5 random words 
  // (dictionary API may not have the definitions for some words)
  async function getWords() {
    // API call goes here
    let newWords = [];
    setloading(true);
    for (let i = 0; i < WORDS_PER_ROLL; i++) {
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
        
        // save indexes to make that api call again later (on details page)
        const randomMeaningIndex = Math.floor(Math.random() * meanings.length);
        const definitions = meanings[randomMeaningIndex].definitions;

        const randomDefinitionIndex = Math.floor(Math.random() * definitions.length);
        const randomDefinition = definitions[randomDefinitionIndex].definition;

        newWords.push({
          id: i + 1,
          word: defRes.data[0].word,
          definition: randomDefinition,
          meaningIndex: randomMeaningIndex,
          definitionIndex: randomDefinitionIndex,
        })
      } catch {}
    }
    setloading(false);
    setWords(newWords)
  }

  // April 12th: moved displaying words logic from JSX to improve readability
  // April 12th: added search bar filtering
  let wordsRolled;
  let filteredWords = [...words];
  if (loading) {
    wordsRolled = <div>Loading...</div>
  } else if (words.length === 0) {
    wordsRolled = <div>No words found. Click Roll to generate words</div>
  } else {

    if (search) {
      filteredWords = filteredWords.filter((item) => 
        item.word.toLowerCase().includes(search.toLowerCase())
      );
    }

    wordsRolled = filteredWords.map((item) => (
      <WordCard
        key={item.id}
        word={item.word}
        definition={item.definition}
        meaningIndex = {item.meaningIndex}
        definitionIndex = {item.definitionIndex}
        onBuy={() => addtoCart(item)} 
        inCart={cart.some((cartItem) => cartItem.word === item.word)}
      />
    ))

  }

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

        <input className="word-card-box" placeholder="Enter a word to search for" onChange={(e) => (setSearch(e.target.value))}/>

        <div className="mt-8 p-4">
          {/* This will show a card for each word and when you click the buy button it will add it to the cart. */}
          {/* "Loading..." while loading words */}
          {/* "Nothing Found" if no words were found */}
          {wordsRolled}
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