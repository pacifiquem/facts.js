import axios from "axios";
import api_data from "./utils/api.info.ts";
import { fetchDataParams } from "./utils/interfaces.ts";

export default function fetchFacts(params?: fetchDataParams) {
    let defaultLimit: number = 1;
    let limit: number = defaultLimit;
    
    if (params != undefined && params.limit != undefined) {
        (isFinite(params.limit) ? limit = params.limit : limit = defaultLimit);
    }
    
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${api_data.api_url}?limit=${limit}`, {
                headers: {
                    'X-Api-Key': api_data.api_key
                },
            });
            let data:any = response.data();
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}
