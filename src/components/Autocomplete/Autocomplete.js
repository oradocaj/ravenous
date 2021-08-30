import React , { Component, Fragment } from 'react';
import Business from '../Business/Business';
import './Autocomplete.css';



export default class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props);
        this.items = [
            'David',
            'Damien',
            'Sara',
            'Jane'
        ];
    }

    render() {
        return (
            <div>
                <input onChange={(e) => console.log(e.target.value)} type='text' />
                <ul>
                    {this.items.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )
    }
}

//https://www.youtube.com/watch?v=NnpISZANByg