import React,{useContext, useReducer} from "react";
import { Modal, Button, Input } from "react-bootstrap";
import stateContext from "../../contexts/stateContext";


function ModalWindow({ show, setShow, question }) {
  const handleClose = () => setShow(false);

  const {state, dispatch} = useContext(stateContext)
  // console.log(state);
  const submitHandler = (e) => {
    e.preventDefault();
    question.answered = true
    if (e.target.children[0].value == question.answer) {
      dispatch({ type: "POINTS", payload: question.value });
    } else {
      dispatch({ type: "POINTS", payload: 0 });
    }
    //  setShow(true)
    handleClose();
  };

  return (
    <>
      <Modal show={show}>
        <Modal.Header >
          <Modal.Title>Внимание вопрос :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{question.question}?</div>
          <form onSubmit={submitHandler}>
            <input type="text" name="answwer" placeholder="ваш ответ"></input>
            <button type="submit" variant="primary" className="modalButton">
              ответить
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modalButton" variant="secondary" onClick={handleClose}>
            X
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;
