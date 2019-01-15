export default async function getImages(input) {
  const URL = `http://api.giphy.com/v1/gifs/search?q=${input.replace(
    /\s/g,
    '+'
  )}&limit=8&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.data;
}
