import React, { Component } from 'react';

export default class CustomerDetails extends Component {

    render() {

        return (
            <div>
                <Header
                    divHeader="header"
                    divTitulo="tituloCabecalho"
                    divBtn="divButtons"
                />
                <div className="divLeft"></div>
                <div className="divCustomer"></div>
                <div className="divFot"></div>
            </div>
        )
    }

}
