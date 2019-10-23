import React from "react";
import styled from "styled-components";

const Man = styled.div`
font-size:18px;
  border:1px solid black;
  text-align:center;
  border-radius:10px;
  padding:5px;
  margin: 15px;
  color:whitesmoke;
  background:lightsalmon;
  padding:2%;


`

export default function DisplayQues (props) {
    return (
      <Man>
      <h2>{props.id}</h2>
      <p>Title: {props.title}</p>
      <p>Question: {props.question}</p>
      <p>Business Type: {props.business_type}</p>
      <p>Username: {props.entrepreneur_username}</p>
      />
      </Man>
      )
  }
  