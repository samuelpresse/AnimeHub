import axios, { AxiosRequestConfig } from 'axios';
  
  export interface FetchResponse<T> {
    pagination:{last_visible_page:number,has_next_page:boolean,current_page:number;}
    data: T[];
  }

  export interface FetchResponseAnime<T> {
    data: T;
  }

const axiosInstance = axios.create({
    baseURL: 'https://api.jikan.moe/v4'   
  });

  class APIClient<T> {
    endpoint: string;
  
    constructor(endpoint: string) {
      this.endpoint = endpoint;
    }
  
    getAll = (config: AxiosRequestConfig) => {
      return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then((res) => res.data);
    };
  
    get = (id: number | string) => {
      return axiosInstance
        .get<FetchResponseAnime<T>>(this.endpoint + '/' + id)
        .then((res) => res.data);
    };

    getAnimeCharacters = (id: number | string) => {
      return axiosInstance
        .get<FetchResponse<T>>(this.endpoint + '/' + id  + "/characters")
        .then((res) => res.data);
    };
  }
  
  export default APIClient;
  