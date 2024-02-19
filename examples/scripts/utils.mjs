export function getRandomSubset(array) {
  const subsetSize = Math.floor(Math.random() * array.length) + 1;
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, subsetSize);
}
