// Async/Await

require('dotenv').config();

const getImage = async () => {

    try {
        const request = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY_GIPHY}`);
        const{ data } = await request.json();
    
        const { url } = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
        console.log(error);
    }
};

getImage();