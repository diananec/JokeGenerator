//in this file we create a new hook called useRandomJoke and we call in in the App.js file

import React, { useState, useEffect } from "react";

function useRandomJoke(firstName, lastName) {
  const [joke, setJoke] = useState(""); //piece of state to keep track of the joke

  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}` //fetches the joke
      )
        .then((res) => res.json()) //converts the data to json
        .then((data) => {
          setJoke(data.value.joke);
        }); //gets the data from the joke

    fetchJoke();
  }, [firstName, lastName]); //useEffect which is triggered only on the mount
  return joke;
}

export default useRandomJoke;
