// const getImagenPromesa = () => new Promise(resolve => resolve('https://ajskdhaskjdhajs.com'))
// getImagenPromesa().then(console.log)

const getImagen = async ()=>{
    try {
        const  apiKey = 'PR5Bl6Pp6YMVzJPIonY61TbvAL19dPKD';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const  img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    }catch (e) {
        console.error(e)
    }
}
getImagen()

