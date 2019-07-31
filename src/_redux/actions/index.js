export const collectAnimals = animals => ({
  type: "COLLECT_ANIMALS",
  animals
});

export const collectDonations = donations => ({
  type: "COLLECT_DONATIONS",
  donations
});

export const updateDonations = donation => ({
  type: "UPDATE_DONATIONS",
  donation
});

export const isLoading = loading => ({
  type: "IS_LOADING",
  loading
});

export const hasErrored = error => ({
  type: "HAS_ERRORED",
  error
});
