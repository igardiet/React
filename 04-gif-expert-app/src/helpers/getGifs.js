export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ktsNbf0e9qaBT222TyA4VcSxgNVbRJLf&q=${category}&limit=10`;
    const answer = await fetch(url);
    const { data } = await answer.json();
  
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    console.log(gifs);
    return gifs;
  };