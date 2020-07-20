import React, { Component } from 'react';
import './button.css'


export default class Button extends Component {
    render() {
        const { name, text, click } = this.props
        return (
            <button className={name} onClick={click}>{text}</button>
        );
    }
}