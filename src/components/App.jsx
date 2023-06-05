import React, { Component } from 'react';
import SearchBar from './Search_bar/Search_bar';
import { SearchImages } from './Api/ApiPixabay'
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    tags: '',
    largeImage: '',
    total: 0,
    isLoading: false,
    isVisible: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
    }
  }

  getImages = async (query, page) => {
    if (!query) {
      return;
    }
    this.setState({ isLoading: true });

    try {
      const data = await SearchImages(query, page);

      if (data.totalHits === 0) {
        return alert('Enter something');
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        total: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onHandleSubmit = query => {
    this.setState({
      query,
      page: 1,
      images: [],
      error: null,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.onHandleSubmit} />
        {images.length === 0 && <p>Enter something, please</p>}
        {images.length !== 0 && <ImageGallery images={images} />}
        <Button onClick={this.onLoadMore} disabled={isLoading} />
        {isLoading ? 'Loading...' : 'Load more'}
      </div>
    );
  }
};


export default App;
