//import { resetWarningCache } from 'prop-types';
import React from 'react';
import Autocomplete from '../Autocomplete/Autocomplete.js';
import '../Autocomplete/Autocomplete.css';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'      
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);    
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSortKeyPress = this.handleSortKeyPress.bind(this);
    
    this.sortByOptions = {
      'Best Match':'best_match',
      'Highest Rated':'rating',
      'Most Reviewed':'review_count'  
    };
  }

  getSortByClass (sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    };
  }
  
  handleSortByChange (sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }
  
  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }  
  
  handleSearch (event) {
    if (this.state.term && this.state.location) {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    } event.preventDefault()
  }
  
  handleKeyPress (event) {
    if (event.key === 'Enter') {
      //console.log('Enter clicked!');     
      this.btn.click();
    };
  }
  
  handleSortKeyPress () {
      //console.log('Mouse clicked!');
      this.btn.click();
      
  }
  
  renderSortByOptions () {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li onMouseDown={this.handleSortByChange.bind(this, sortByOptionValue)} onClick={this.handleSortKeyPress} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
    });
  }
  
  render() {    
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress} />
          <input placeholder="Where?" onChange={this.handleLocationChange} onKeyPress={this.handleKeyPress} />
          { /*<Autocomplete suggestions={["Asian", "British", "Italian", "American", "Indian"]} placeholder="Search Businesses" handleTermChange={this.handleTermChange} onKeyPress={this.handleKeyPress} />
          <Autocomplete suggestions={["Rome", "Paris", "London", "Berlin", "Madrid"]} placeholder="Where?" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress} />*/ }
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch} ref={node => (this.btn = node)}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
