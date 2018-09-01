export const UPDATE_DIFFICULTY = "UPDATE_DIFFICULTY";

export const updateDifficulty = (difficulty) => {
  return {
    type: UPDATE_DIFFICULTY,
    difficulty
  };
};
