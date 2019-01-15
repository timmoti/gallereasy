export default async function getImages() {
  const URL = `http://api.giphy.com/v1/gifs/search?q=cat&limit=8&api_key=${
    process.env.REACT_APP_GIPHY_API_KEY
  }`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.data;
}
