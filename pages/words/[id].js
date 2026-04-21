// Done by Raymond Apr 11, well actually the 12th
// This file here uses the useRouter hook so that we get the id for the word
// from the url that can be clicked from the catalog section, and it renders a 
//unique  page, like a profile for the word. (it is that every word has the same description but oh well)

import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import axios from "axios";
import { useState, useEffect } from 'react';

export default function WordDetails() {
  // so i use this hook to get the id from the URL (this is for the dynamic part)
  const router = useRouter();
  const { id } = router.query;

  // state to store word details
  const [wordDetails, setWordDetails] = useState({
          word: "Loading...",
          definition: "Loading...",
          synonyms: ["Loading..."],
          antonyms: ["Loading..."],
          partOfSpeech: "Loading...",
          phonetics: "Loading...",
          example: "Loading...",
        });

  // gettin the word and the indexes to get to the right definition from api call
  let word, meaningIndex, definitionIndex;
  if (id) {
    [word, meaningIndex, definitionIndex] = id.split('-');
    
  }

  useEffect(() => {
    // break if id is not retrieved yet
    if (!id) return;

    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        console.log(response)
        // to get rid of repetitive code
        const wordData = response.data[0].meanings[meaningIndex];
        // fill the word details state
        // the "?" make sure that the program does not crash even if some properties do not exist
        // which is possible, since this api is inconsistent
        // "?? null" set the value to null if an error occurs
        setWordDetails({
          word: word,
          definition: wordData?.definitions[definitionIndex]?.definition ?? null,
          synonyms: wordData?.synonyms ?? null,
          antonyms: wordData?.antonyms ?? null,
          partOfSpeech: wordData?.partOfSpeech ?? null,
          phonetics: response.data[0]?.phonetics[0]?.text ?? null,
          example: wordData?.definitions[definitionIndex]?.example ?? null,
        });
      })
      .catch((error) => {console.error(error)})
  }, [id]); // only happens after getting the id

  // andd this fulfills the Phase 2 requirement for Dynamic Routes 
  // simply put, it allows us to show specific info for whatever word the user clicked
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Dynamic page title so the tab in the browser shows the actual word */}
      <Head>
        <title>WordsMall / {word}</title>
      </Head>

      <main className="text-center max-w-2xl">
        {/* Using capitalize here to keep the "WordsMall" nice n professional */}
        <h1 className="capitalize text-5xl mb-6">{word}</h1>
        
        {/* lastly this div uses our standard card styling for design consistency  */}
        <div className="word-card-box">
          <h2 className="text-[#d4af37] text-2xl mb-4">Word Profile</h2>
          <p className="mb-4">
            {/* You are currently looking at the somewhat detailed view for the word <strong>"{word}"</strong>.  */}
            <strong>{wordDetails.definition}</strong>
          </p>
          {/* display details; is some details are not found, display "Not Found" */}
          <p className="mb-4">
            Part of Speech: {wordDetails.partOfSpeech 
            ? <strong>{wordDetails.partOfSpeech}</strong> 
            : <strong>Not Found</strong>}
          </p>
          <p className="mb-4">
            Synonyms: {wordDetails.synonyms.length != 0 
            ? <strong>{wordDetails.synonyms.join(", ")}</strong> 
            : <strong>Not Found</strong>} 
          </p>
          <p className="mb-4">
            Antonyms: {wordDetails.antonyms.length != 0 
            ? <strong>{wordDetails.antonyms.join(", ")}</strong> 
            : <strong>Not Found</strong>}
          </p>
          <p className="mb-4">
            Phonetics: {wordDetails.phonetics 
            ? <strong>{wordDetails.phonetics}</strong> 
            : <strong>Not Found</strong>}
          </p>
          <p className="mb-4">
            Example: {wordDetails.example 
            ? <strong>{wordDetails.example}</strong> 
            : <strong>Not Found</strong>}
          </p>
          <p className="italic text-blue-500">
            "Words are more than sound, they are meaningful, anyways, this word is nice" - A random person named jeff
          </p>
        </div>

        {/* here i have the navigation links   */}
        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/catalog" className="btn-mall">
            Back to Catalog
          </Link>
          <Link href="/cart" className="btn-mall">
            View Cart
          </Link>
        </div>
      </main>
    </div>
  );
}