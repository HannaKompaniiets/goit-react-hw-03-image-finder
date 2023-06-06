import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as SearchIcon } from '../icons/search-glass.svg';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleInput = event => {
    this.setState({
      query: event.currentTarget.value.toLowerCase(),
    });
  };

  onSubmitForm = event => {
    event.preventDefault();

      const { query } = this.state;
      
      if (query.trim() === '') {
        toast.error('Please enter something');
        return;
      }
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.onSubmitForm} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <SearchIcon className={css.SearchFormButtonLabel} />
          </button>

          <input
            onChange={this.handleInput}
            className={css.SearchFormInput}
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}


export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};