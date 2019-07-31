export const donationsReducer = (state = [], action) => {
  switch (action.type) {
    case "COLLECT_DONATIONS":
      return action.donations;
    case "UPDATE_DONATIONS":
      return action.payload;
    default:
      return state;
  }
};
