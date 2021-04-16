export const playSound = (url: string): void => {
  const audio = new Audio(`https://yaia-team-rslang-api.herokuapp.com/${url}`);
  audio.play();
};
