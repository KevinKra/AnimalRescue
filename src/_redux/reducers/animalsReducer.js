export const animalsReducer = (state = [], action) => {
  switch (action.type) {
    case "COLLECT_ANIMALS":
      return action.animals;
    case "ADD_ANIMAL":
      return action.payload;
    default:
      return state;
  }
};
