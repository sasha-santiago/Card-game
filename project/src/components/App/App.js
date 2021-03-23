import ModalWindow from "../ModalWindow/ModalWindow";
import "./App.css";
import { useReducer, useEffect } from "react";
import reducer from "../../utils/reducer";
import stateContext from "../../contexts/stateContext";
import Questions from "../Questions/Questions";

function App() {
  useEffect(() => {
    fetch("http://localhost:4000/gameJson")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "QUESTIONS", payload: data });
      });
  }, []);
  const game = [];
  const [state, dispatch] = useReducer(reducer, { game: [], points: 0 });

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      <h1>Cвоя игра</h1>
      <div className="container">
        <Questions></Questions>
      </div>
    </stateContext.Provider>
  );
}

export default App;
