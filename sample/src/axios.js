import axios from "axios";
import {baseUrl} from './Constants/Constants'
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
  });

  export default instance