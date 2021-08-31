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

        this.state = {
            suggestions: [],

        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        if (value.length === 0) {
            this.setState(() => ({
                suggestions: [],
            }))
        } else {
            const regex = new RegExp(`${value}`, 'i');
            const suggestions = this.items.sort().filter(v => v.test(regex));
            this.setState(() => ({suggestions}));
        }
    }

    render() {
        return (
            <div>
                <input onChange={this.onTextChanged} type='text' />
                <ul>
                    {this.items.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )
    }
}

//https://www.youtube.com/watch?v=NnpISZANByg