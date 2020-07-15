import React, { Component } from 'react';
import './input.css'


export default class Input extends Component {
    render() {
        const { nameClass, placeholder, tipo, value, func, funct, nome } = this.props
        return (
            <input name={nome} className={nameClass} type={tipo} value={value} placeholder={placeholder} onBlur={func} onMouseDown={funct}/> 
        );
    }
}