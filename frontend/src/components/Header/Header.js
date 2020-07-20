import React, { Component } from 'react';
import '../Button/button.css';
import './header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    render() {
        const  { divHeader, divTitle, divBtn } = this.props
        return (
                <div className={divHeader}>
                    <div className={divTitulo}>
                        <h1 className=''>Customers</h1>
                    </div>
                    <div className={divBtn}>
                        <Link className="buttonLink button-blue" to="/register">Register Customer</Link>     
                        <Link className="buttonLink button-blue" to="/"> List Customers</Link>
                    </div>
                </div>
        );
    }
}
