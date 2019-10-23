import React, { useEffect, useState } from "react";
import DisplayQues from "./DisplayQues";
import axios from 'axios';
import "../index.css";


export default function Questions() {
  // TODO: Add useState to track data from useEffect
  const [question, setQuestion]= useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://kefi-mentor-me.herokuapp.com/api/questions").then(res => {
      // setCharacters(res.data.results);
      console.log(res.data.results);
      setQuestion(res.data.results);
    }).catch(e => console.log(e));
  }, []);

  return (
    <section>
     
      {question.map(character => 
          <CharacterCard
            id={character.id}
            name={character.name}
            species={character.species}
            image={character.image}
            gender={character.gender}
            status={character.status}
          />   

      )

    }
    </section>
  )
} 
