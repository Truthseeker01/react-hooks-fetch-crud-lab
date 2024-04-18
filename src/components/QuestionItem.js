import React from "react";
import { useState } from "react";

function QuestionItem({ question, questions, setQuestions, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  // const [ selectedAnswer, setSelectedAnswer ] = useState(0)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    onDelete(id)
  }
  
  function handleChange(event){{
    // setSelectedAnswer(selectedAnswer => parseInt(event.target.value))
    // console.log(event.target.value)
    
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({correctIndex: parseInt(event.target.value)})
    })
  }}

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>

      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
