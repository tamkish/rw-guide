const COLOR_SYMBOLS = [
  // "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  // "a",
  // "b",
  // "c",
  // "d",
  // "e",
  // "f",
] as const;

export const getRandomColor = () => {
  let out = "#";
  for (let i = 0; i < 3; i++) {
    out += COLOR_SYMBOLS[Math.floor(Math.random() * COLOR_SYMBOLS.length)];
  }
  return out;
};
