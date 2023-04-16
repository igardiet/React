const apiKey = "sATnXdpaU1KVISuaFSELqW01mjSjN6KU";
const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
  .then((ans) => ans.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
