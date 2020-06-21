import React, { Component } from 'react';
import BackEndApi from '../api/backEndApi';

export default class Home extends Component {
    constructor( props ) {
        super( props );
        this.backEndApi = new BackEndApi();
        this.state = {
            clients: []
        }
    }

    getAllClients = async () => {
        const response = await this.backEndApi.getAllClients();

        this.setState({
            clients: response.data
        })
    }

    componentDidMount() {
        this._asyncRequest = this.getAllClients();
    }

    render() {
        const { clients } = this.state;
        
        return (
            <div className="App">
                {
                    clients.length > 0 
                        ? clients.map( client => 
                            <React.Fragment key={ client.id }>
                                <p> oi, { client.nome }</p>
                                <button value={ client.id }></button>
                            </React.Fragment>)
                        : 'There are no clients to show'
                }
            </div>
        )
    }
}