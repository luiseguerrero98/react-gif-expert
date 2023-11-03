export const getGifs = async(category,offset) => {
    const apiKey = '8JCVeObkhMFwT4EbIb4dlVLSoVuhNb1A';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10&offset=${offset}`);
    const {data} = await resp.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
};
