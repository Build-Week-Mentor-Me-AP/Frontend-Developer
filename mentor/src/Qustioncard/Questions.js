import React, { useEffect, useState } from "react";
import DisplayQues from "./DisplayQues";
import axios from 'axios';

import "../index.css";


export default function Questions() {
  
  const [question, setQuestion]= useState([]);

  useEffect(() => {
    
    axios.get("https://kefi-mentor-me.herokuapp.com/api/questions")
    .then(res => {
      
      console.log(res);
      setQuestion(res.data);
    }).catch(e => console.log(e));
  }, []);

  return (
    <section>
     
      {question.map(ques => 
          <DisplayQues   
            id={ques.id}
            title={ques.title}
            question={ques.question}
            bussiness_type={ques.bussiness_type}
            photo={ques.photo}
            entrepreneur_username={ques.entrepreneur_username}
          />   

      )

    }
    </section>
  )
} 
