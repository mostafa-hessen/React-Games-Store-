import axios from "axios";


export  const axiosInstance = 
axios.create({ baseURL: `https://api.rawg.io/api/`})

       