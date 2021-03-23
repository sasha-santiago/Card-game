const reducer = (state, action) => {
  switch (action.type) {
    case "QUESTIONS":
      return {
        ...state,
        game: [
          ...action.payload.map((collection) => {
            return {
              collectionTitle: collection.collectionTitle,
              questions: [...collection.questions],
            };
          }),
        ],
      };
    case "POINTS":
      console.log(state);
      return { ...state, points: (state.points += action.payload) };

    default:
      return state;
  }
};
export default reducer;
