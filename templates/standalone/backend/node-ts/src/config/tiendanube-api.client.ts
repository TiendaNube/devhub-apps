import axios from 'axios';
import { userRepository } from "@repository";
import { HttpErrorException } from "@utils";

export const tiendanubeApiClient = axios.create({
    baseURL: process.env.TIENDANUBE_API_URL,
    headers: {
        "Content-Type": "application/json",
        "User-Agent": `${process.env.CLIENT_ID} (${process.env.CLIENT_EMAIL})`,
    }
});


 tiendanubeApiClient.interceptors.request.use((config) => {
    // Do something before request is sent
    const { access_token} = userRepository.findCredentials();
    config.headers['Authentication'] = `bearer ${access_token}`;
    return config;
}, function (error) {
    // Do something with request error

    if (error.isAxiosError) {
        const { data } = error.response;
        const payload = new HttpErrorException('tiendanubeApiClient - ' + data?.message, data?.description)
        payload.setStatusCode(data?.code);
        return Promise.reject(payload)
    }

    return Promise.reject(error);
})


tiendanubeApiClient.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data || {};
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.isAxiosError) {
        const { data } = error.response;
        const payload = new HttpErrorException('tiendanubeApiClient - ' + data?.message, data?.description)
        payload.setStatusCode(data?.code);
        return Promise.reject(payload)
    }


    return Promise.reject(error);
});

export const buildPath = (...path: string[]): string => {
    const storeId = userRepository.findCredentials().user_id;
    return `${storeId}/${path.join('/')}`
}


