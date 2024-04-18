import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import { useEffect } from "react";

function App() {
  const [page, setPage] = useState("List");
  const [ questions, setQuestions ] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(questions => setQuestions(questions))
  }, [])

  function onDelete(id){
    //delete from the server
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    //delete from the frontend
    const updatedQuestions = questions.filter(question => question.id !== id)
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setQuestions={setQuestions} questions={questions} /> : <QuestionList onDelete={onDelete} questions={questions} setQuestions={setQuestions} />}
    </main>
  );
}

export default App;
