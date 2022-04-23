
import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'https://admin.naxa.com.np/api/',
  headers: {'Content-Type': 'application/json'}
});

export const serviceApi = async () =>{
    const response =  await axios
    .get('services')
    .catch((err) => {
        console.log("Error: ", err)
    });
    
return response.data
}