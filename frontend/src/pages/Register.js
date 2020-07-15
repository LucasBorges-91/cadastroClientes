import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Alert from '../components/Alert/Alert';
import '../pages/register.css'
import BackEndApi from '../api/backEndApi';


export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.backEndApi = new BackEndApi();
        this.state = {
            name: null,
            birthDate: null,
            email: null,
            telephone: null,
            address: null,
            number: null,
            complement: null,
            color: null,
            text: null,
            showUp: false
        }
    }

    getValues(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name]: value})
    }
    
   
    postUsuario() {
        this.backEndApi.postClient(this.state)
        this.setState({
            color: "green", text: "customer successfully registered", showUp: true
        })
        setTimeout(() => {
            this.setState({
                showUp: false
            })
        }, 5500)
    }

    alert() {
        const { color, text } = this.state

        return (
            <React.Fragment>
                {this.state.showUp && (
                    <Alert color={color} text={text} />
                )}
            </React.Fragment>
        )
    }


    render() {

        return (
            <div className="containerRegister">
                <div>
                    <Header
                        divCabecalho="cabecalho"
                        divTitulo="tituloCabecalho"
                        divBtn="divButtons"
                    />
                    <div className="divCont">
                        {this.alert()}
                        <div className="divTitle">
                            <span>Register Customer</span>
                        </div>
                        <form>
                            <label>Name </label>
                            <Input
                                nome="name"
                                nameClass="inputRegister"
                                placeholder="Name"
                                tipo="text"
                                func={this.getValues.bind(this)}
                            />
                            <label>Birth date </label>
                            <Input
                                nome="birthDate"
                                nameClass="inputRegister"
                                placeholder="Birth date"
                                tipo="text"
                                func={this.getValues.bind(this)}
                            />
                            <label>Email </label>
                            <Input
                                nome="email"
                                nameClass="inputRegister"
                                placeholder="email"
                                tipo="email"
                                func={this.getValues.bind(this)}
                            />
                            <label>Telephone </label>
                            <Input
                                nome="telephone"
                                nameClass="inputRegister"
                                placeholder="Telephone"
                                tipo="text"
                                func={this.getValues.bind(this)}
                            />
                            <label>Address </label>
                            <Input
                                nome="address"
                                nameClass="inputRegister"
                                placeholder="Address"
                                tipo="text"
                                func={this.getValues.bind(this)}
                            />
                            <label>Number </label>
                            <Input
                                nome="number"
                                nameClass="inputRegister"
                                placeholder="Number"
                                tipo="text"
                                func={this.getValues.bind(this)}
                            />
                            <label>Complement </label>
                            <Input
                                nome="complement"
                                nameClass="inputRegister"
                                placeholder="Complement"
                                tipo="text"
                                func={this.getValues.bind(this)}
                            />
                            <Input
                                nameClass="inSub"
                                placeholder="Register"
                                tipo="submit"
                                value="Register"
                                funct={this.postUsuario.bind(this)}
                            />
                        </form>
                    </div>
                </div>
                <div className="divFot"></div>
            </div>
        );
    }
}