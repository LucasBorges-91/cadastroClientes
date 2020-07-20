import React, { Component } from 'react';
import './input.css'


export default class Input extends Component {
    render() {
        const { nameClass, placeholder, type, value, func, funct } = this.props
        return (
            <input className={nameClass} type={type} value={value} placeholder={placeholder} onBlur={func} onMouseDown={funct}/> 

        );
    }
}
