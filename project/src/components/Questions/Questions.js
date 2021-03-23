import React, { useEffect, useContext, useState } from "react";
import stateContext from "../../contexts/stateContext";
import ListQuestions from "../ListQuestions/ListQuestions";
import Question from "../Question/Question";

function Questions(props) {
  const { state, dispatch } = useContext(stateContext);

  return (
    <div className="list">
      {state.game.map((collection) => {
        return (
          <ListQuestions key={Math.random()} collection={collection}/>
        );
      })}
      <div className="points">Количество заработанных очков :{state.points}</div>
    </div>
  );
}

export default Questions;
