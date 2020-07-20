import React, { Component } from 'react';
import BackEndApi from '../api/backEndApi';
import './home.css'
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Lupa from '../images/lupa.png';
import Card from '../components/Card/Card';



export default class Home extends Component {
    constructor(props) {
        super(props);
        this.backEndApi = new BackEndApi();
        this.state = {
            clients: []
        }
    }

    async componentDidMount(){
        const response = await this.backEndApi.getAllClients('');

        this.setState({ clients: response.data })
    }

    

    deleteUsuario(id) {
        if( window.confirm("are u sure? ") ) {
            this.backEndApi.deleteClient(id);
        }
        window.location.reload();
    }




    render() {
        const { clients } = this.state;
        return (
            <div className="containerHome">                
                <Header
                    divCabecalho="cabecalho"
                    divTitulo="tituloCabecalho"
                    divBtn="divButtons"
                />
                <div className="divInputHome">
                    <Input
                        nameClass="inputHome"
                        placeholder="Search"
                        type="search"
                    />
                    <img src={Lupa} className="btn" alt="buscar"/>
                </div>
                <div className='divCard'>
                     {clients.map( client => <Card key={client.id} name={client.name} email={client.email} telephone={client.telephone} 
                        func={() => this.deleteUsuario(client.id)} /> ) }
                </div>
                <div className="divFot"></div>    
            </div>
        )
    }
}