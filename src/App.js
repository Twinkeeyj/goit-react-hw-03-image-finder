import React, { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import DataApi from './services/dataApi';
import Loaders from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    data: [],
    loading: false,
    error: null,
    query: '',
    page: 1,
    largeImageURL: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.fetchData();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  fetchData = () => {
    // if(this.state.data.length <1){
    //   this.setState({error: true})
    // }

    this.setState({ loading: true });
    const { query, page } = this.state;

    DataApi.fetchDataWithQuery(query, page)

      .then(data => {
        if (data.length < 1) {
          this.setState({ error: true });
        } else {
          this.setState(prevState => ({
            data: [...prevState.data, ...data],
            page: prevState.page + 1,
            error: false,
          }));
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handleSearch = queryOn => {
    this.setState({
      data: [],
    });
    this.setState({
      query: queryOn,
    });
  };
  openModal = largeImageURL => {
    this.setState({
      largeImageURL: largeImageURL,
    });
  };

  modalClose = () => {
    this.setState(prevState => ({ largeImageURL: !prevState.largeImageURL }));
  };

  render() {
    const { data, loading, error, largeImageURL } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        {error && <Loaders text="ERRoR" />}
        {loading ? (
          <Loaders text="Loading..." />
        ) : (
          <ImageGallery openModal={this.openModal} data={data} />
        )}
        {data.length > 0 && <Button handleClick={this.fetchData} />}
        {largeImageURL && (
          <Modal
            onSubmit={this.openModal}
            largeImageURL={largeImageURL}
            modalClose={this.modalClose}
          />
        )}
      </div>
    );
  }
}
