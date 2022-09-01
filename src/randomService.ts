export function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log("Api Base:", process.env.API_BASE);