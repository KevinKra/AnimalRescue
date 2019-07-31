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
