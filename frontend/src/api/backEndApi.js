import * as axios from 'axios';

export default class BackEndApi {
    constructor() {
      this.axios = axios.create({
        baseURL: "http://localhost:8083"
      })
    }

    getAllClients = () => this.axios.get( `/client` );
}