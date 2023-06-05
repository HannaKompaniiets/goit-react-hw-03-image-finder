import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <header className={css.searchbar}>
        <form onSubmit={this.onSubmitForm} className={css.searchform}>
          <button type="submit" className={css.button}>
            <span className={css.button_label}>Search</span>
          </button>

          <input
            onChange={this.handleInput}
            className={css.input}
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