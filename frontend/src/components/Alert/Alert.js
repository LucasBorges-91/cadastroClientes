import React, { Component } from 'react';
import './alert.css'

export default class Alert extends Component {
    render() {
        const { color, text } = this.props
        return (
            <React.Fragment>
                <div className={color}>
                    <p className="alert">{text}</p>
                </div>
            </React.Fragment>
        )
    }
}