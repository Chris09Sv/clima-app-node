const axios=require('axios');

const getLugarLatLong=async (dir)=>{
const encodedUrl = encodeURI(dir);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
    headers: {'X-RapidApi-Key': '2d19b4549cmshdb30ff6ce36db85p137a9bjsn306260e1e9ae'}
});

        const resp = await instance.get();
    if(resp.data.Results.length===0){
        throw new Error(`No hay resultados para la ubicacion ingresada ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat =data.lat;
    const lng = data.lon;

return {
    direccion,
    lat,
    lng
}
}


module.exports={
    getLugarLatLong
}