// Fetch API
require('dotenv').config();
const request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY_GIPHY}`);

request
.then( response => response.json() )
.then( ({data}) => {
    const {url} = data.images.original.url;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
})
.catch(console.warn);