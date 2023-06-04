import React, { Component } from 'react';
import css from './SearchBar.module.css';


class SearchBar extends Component { 
    state = { 
    searchigImages: '',
    }

    handleInput = (event) => { 
    this.setState({
        searchigImages: event.currentTarget.value.toLowerCase(),
    })  
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        
        if (this.state.searchigImages.trim() === '') {
            alert('write searching image')
            return 
        }
        this.props.onSubmit(this.state.searchigImages);
        this.setState({ searchigImages: '' })
        
    }

    render(){ 
        return (
            
                <header className={css.searchbar}>
                <form onSubmit={ this.onSubmitForm} className={css.searchform}>
                    <button type="submit" className={css.button}>
                            <span className={css.button_label}>Search</span>
                    </button>

                        <input onChange={this.handleInput}
                        className={css.input}
                        value={ this.state.searchigImages}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        />
                </form>
            </header>
            
        )
    }
}


export default SearchBar;