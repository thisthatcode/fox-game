export const TICK_RATE = 1000;
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANCE = 0.2;
export const SCENES = ["day", "rain"];
export const DAY_LENGTH = 60;
export const NIGHT_LENGTH = 4;

// num b/w 0 and 2 then add 5, so 5 is the flor and 7 is the ceiling,
// then add clock to get the correct time for the fox to be hungry
export const getNextHungerTime = (clock) =>
  Math.floor(Math.random() * 3) + 5 + clock;
export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 2) + 3 + clock;
export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 4 + clock;
