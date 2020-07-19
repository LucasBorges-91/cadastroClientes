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
            adress: null,
            number: null,
            complement: null,
            color: null,
            text: null,
            showUp: false
        }
    }

    getName(evt) {
        const name = evt.target.value;

        this.setState({
            name: name
        })
    }

    getBirthDate(evt) {
        const birthDate = evt.target.value;

        this.setState({
            birthDate: birthDate
        })
    }

    getEmail(evt) {
        const email = evt.target.value;

        this.setState({
            email: email
        })
    }

    getTelephone(evt) {
        const telephone = evt.target.value;

        this.setState({
            telephone: telephone
        })
    }

    getAdress(evt) {
        const adress = evt.target.value;

        this.setState({
            adress: adress
        })
    }

    getNumber(evt) {
        const number = evt.target.valeu;

        this.setState({
            number: number
        })
    }

    getComplement(evt) {
        const complement = evt.target.value;

        this.setState({
            complement: complement
        })
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
                                nameClass="inputRegister"
                                placeholder="Name"
                                tipo="text"
                                id="inName"
                                func={this.getName.bind(this)}
                            />
                            <label>Birth date </label>
                            <Input
                                nameClass="inputRegister"
                                placeholder="Birth date"
                                tipo="date"
                                id="inBirth"
                                func={this.getBirthDate.bind(this)}
                            />
                            <label>Email </label>
                            <Input
                                nameClass="inputRegister"
                                placeholder="email"
                                tipo="email"
                                id="inEmail"
                                func={this.getEmail.bind(this)}
                            />
                            <label>Telephone </label>
                            <Input
                                nameClass="inputRegister"
                                placeholder="Telephone"
                                tipo="text"
                                id="inTelephone"
                                func={this.getTelephone.bind(this)}
                            />
                            <label>Adress </label>
                            <Input
                                nameClass="inputRegister"
                                placeholder="Adress"
                                tipo="text"
                                id="inAdress"
                                func={this.getAdress.bind(this)}
                            />
                            <label>Number </label>
                            <Input
                                nameClass="inputRegister"
                                placeholder="Number"
                                tipo="text"
                                id="inNumber"
                                func={this.getNumber.bind(this)}
                            />
                            <label>Complement </label>
                            <Input
                                nameClass="inputRegister"
                                placeholder="Complement"
                                tipo="text"
                                id="inComplement"
                                func={this.getComplement.bind(this)}
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