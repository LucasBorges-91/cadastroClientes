import React, { Component } from 'react';
import './card.css'

export default class Card extends Component {

    render() {
        const { name, email, telephone, func, funct} = this.props
        return(
            <div className='card'>
                <div className='topCard'>
                    <h3 className='title'>{name}</h3>                    
                </div>
                <div className='mediumCard'>
                    <p>{telephone}</p>
                    <p>{email}</p>
                </div>
                <div className='bottomCard'>
                    <button className='actions' type="submit" onMouseDown={funct} >Select</button>
                    <button className='actions' type="submit" onMouseDown={func} >Delete</button>
                </div>
            </div>
        );
    }
}