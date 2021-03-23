import React, {useState} from 'react';
import ModalWindow from '../ModalWindow/ModalWindow'

function Question({question}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <div className = "question">
      {!question.answered ? <>
      <ModalWindow key={question.value * Math.random()}setShow={setShow} show ={show} question={question}/>
    <button onClick={handleShow}>
       {question.value}
      </button>
      </> : <>
      <ModalWindow key={question.value * Math.random()}setShow={setShow} show ={show} question={question}/>
    <button className="wrongButton" >
       {question.answer}
      </button>
      </>}
      </div>
      
  );
}

export default Question;
