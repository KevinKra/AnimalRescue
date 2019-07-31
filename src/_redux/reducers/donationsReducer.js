export const donationsReducer = (state = [], action) => {
  switch (action.type) {
    case "COLLECT_DONATIONS":
      return action.donations;
    case "UPDATE_DONATIONS":
      const updatedDonations = [...state, action.donation];
      return updatedDonations;
    default:
      return state;
  }
};
