export const getRandomElement = (arr: []) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
export const sortByPopulation = (characters: any[]) => {
    return [...characters].sort((a, b) => b.population - a.population);
};

export const sortByAlphabet = (characters: any[]) => {
    return [...characters].sort((a, b) => a.name.common.localeCompare(b.name.common));
}

export const formatPopulation = (population: number): string => {
  return `${(population / 1000000).toFixed(2)} mln`;
};