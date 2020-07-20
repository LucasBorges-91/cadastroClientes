import * as axios from 'axios';

export default class BackEndApi {
    constructor() {
      this.axios = axios.create({
        baseURL: "http://localhost:8080"
      })
    }

    getAllClients = () => this.axios.get( `/client` );

    postClient = (client) => this.axios.post( `/client`, client );

    deleteClient = (id) => this.axios.delete( `/client/${id}` );
}