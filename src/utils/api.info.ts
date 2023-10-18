import {config} from "dotenv"
config();

const api_data = Object.freeze({
    api_url: "https://api.api-ninjas.com/v1/facts",
    api_key: process.env.API_KEY
});

export default api_data;