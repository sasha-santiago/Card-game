import React,{useState } from 'react';
import Question from '../Question/Question'

function ListQuestions({collection}) {
  
  return (
    <div className="theme">
    <div className="titlediv">{collection.collectionTitle}</div>
    {collection.questions.map((question) => {
      return <Question key={Math.random()} question={question}/>;
    })}
  </div>
  );
}

export default ListQuestions;
