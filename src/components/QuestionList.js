import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions, onDelete}) {

  const mappedQuestions = questions.map(question => <QuestionItem  key={question.id} onDelete={onDelete} setQuestions={setQuestions} question={question} questions={questions} />)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{mappedQuestions}</ul>
    </section>
  );
}

export default QuestionList;
