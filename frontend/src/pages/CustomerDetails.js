import React, { Component } from 'react';
import Header from '../components/Header/Header';
import './home.css';
import './customerDetails.css';
import Input from '../components/Input/Input';

export default class CustomerDetails extends Component {

    render() {

        return (
            <div className="containerHome">
                <Header
                    divHeader="header"
                    divTitle="titleHeader"
                    divBtn="divButtons"
                />
                <div className="editBody">
                <div className="divLeft">
                    <label>Name:</label>
                    <label>Birth Date:</label>
                    <label>Email:</label>
                    <label>Telephone:</label>
                    <label>Address:</label>
                    <label>Number:</label>
                    <label>Complement:</label>
                </div>
                <div className="divCustomer">
                    <Input nameClass="inputEdit"/>
                    <Input nameClass="inputEdit"/>
                    <Input nameClass="inputEdit"/>
                    <Input nameClass="inputEdit"/>
                    <Input nameClass="inputEdit"/>
                    <Input nameClass="inputEdit"/>
                    <Input nameClass="inputEdit"/>
                    <div className="btnDivEdit">
                        <Input nameClass="btnEdit" tipo="submit" value="Save"/>
                        <Input nameClass="btnEdit" tipo="submit" value="Return"/>
                    </div>
                </div>
                </div>
                <div className="divFot"></div>
            </div>
        )
    }

}
