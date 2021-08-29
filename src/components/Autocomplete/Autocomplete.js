import React , { Component, Fragment } from 'react';
import Business from '../Business/Business';
import './Autocomplete.css';


class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion = 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ""
        };
    }


    onChange = event => {
        const { suggestions } = this.props;
        const userInput = event.currentTarget.value;

        const filteredSuggestions = suggestions.filter(
            suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: event.currentTarget.value
        });
    };

    onClick = event => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: event.currentTarget.innerText
        });
    };

    onKeyDown = event => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        if (event.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });        
        } else if (event.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            this.setState({ activeSuggestion: activeSuggestion - 1 });
        } 
        // User pressed the down arrow, increment the index
        else if (event.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }
            this.setState({ activeSuggestion: activeSuggestion + 1 })
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;        
    
        let suggestionsListComponent

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul class="suggestions">
                        {filteredSuggestions.map( (suggestion, index) => {
                            let className;

                            //Flag the active suggestion with a class
                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }
                            return (
                                <li> className={className} key={suggestion} onClick={onClick}
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>    
                );
            } else {
                suggestionsListComponent = (
                    <div class="no-suggestion">
                        <em>No suggestions available.</em>
                    </div>
                );
            }
        }
        
        return (
            <Fragment>
                <input
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                {suggestionsListComponent}
            </Fragment>
        );
    };
};

export default Autocomplete;
