import React, { Component } from 'react';
import SearchBar from './Search_bar/Search_bar';

class App extends Component {
  state = {
    hits: null,
    searchigImages: '',
  }

  componentDidMount(prevProps, prevState) {

    

    if (prevState.searchigImages !== this.state.searchigImages) {
      fetch('https://pixabay.com/api/?q=&{{this.state.searchingImages}}&page=1&key=35822629-b9359d31660fe7f3ad5b1d613&image_type=photo&orientation=horizontal&per_page=12')
        .then(response => response.json())
        .then(({ hits }) => this.setState({ hits }))
    
    }
  }

  handleForm = searchigImages => { 
this.setState({searchigImages})  }

  render() {
    return (
    <div>
        <SearchBar onSubmit={this.handleForm} />
        {this.state.hits && <div><img src={this.state.hits[0].webformatURL} /></div>}
    </div>
    );
  } 
};


export default App;
