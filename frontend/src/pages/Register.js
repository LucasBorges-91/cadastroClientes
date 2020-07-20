import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Alert from '../components/Alert/Alert';
import '../pages/register.css'
import BackEndApi from '../api/backEndApi';


export default class Register extends Component {

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
        const nickname = event.target.name;

        this.setState({[nickname]: value})
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
                                nickname="name"
                                nameClass="inputRegister"
                                placeholder="Name"
                                type="text"
                                func={this.getValues.bind(this)}
                            />
                            <label>Birth date </label>
                            <Input
                                nickname="birthDate"
                                nameClass="inputRegister"
                                placeholder="Birth date"
                                type="date"
                                type="text"
                                func={this.getValues.bind(this)}
                            />
                            <label>Email </label>
                            <Input
                                nickname="email"
                                nameClass="inputRegister"
                                placeholder="email"
                                type="email"
                                func={this.getValues.bind(this)}
                            />
                            <label>Telephone </label>
                            <Input
                                nickname="telephone"
                                nameClass="inputRegister"
                                placeholder="Telephone"
                                type="text"
                                func={this.getValues.bind(this)}
                            />
                            <label>Address </label>
                            <Input
                                nickname="address"
                                nameClass="inputRegister"
                                placeholder="Address"
                                type="text"
                                func={this.getValues.bind(this)}
                            />
                            <label>Number </label>
                            <Input
                                nickname="number"
                                nameClass="inputRegister"
                                placeholder="Number"
                                type="text"
                                func={this.getValues.bind(this)}
                            />
                            <label>Complement </label>
                            <Input
                                nickname="complement"
                                nameClass="inputRegister"
                                placeholder="Complement"
                                type="text"
                                func={this.getValues.bind(this)}
                            />
                            <Input
                                nameClass="inSub"
                                placeholder="Register"
                                type="submit"
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
