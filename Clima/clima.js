const axios= require('axios');


const getClima= async(lat,lng)=>{
    
const resp =await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9b4057f431a36576988df1c4d5bd1ccd&units=metric`)

return resp.data.main.temp;
}

module.exports={
    getClima
}