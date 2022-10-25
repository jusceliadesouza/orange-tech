const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

fetch(url)
  .then((res) => res.json())
  .then((jsonBody) => console.log(jsonBody))
  .catch((err)=> console.error(err))