import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from "./components/Button/Button"
import DataApi from "./services/dataApi"

export default class App extends Component {
  state = {
    data: [],
    loading: false,
    error: null,
    query: '',
    page: 1,
    key: '18953404-219a87b5236596fa40acd8a55',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.fetchData();
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     loading: true,
  //   });
  //   this.fetchArticles();
  // }

  // fetchArticles = () => {
    // const { query, page, key } = this.state;
    // axios
    //   .get(
    //     `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    //   )
    fetchData=()=>{
    const { query, page, key } = this.state;

    DataApi
    .fetchDataWithQuery(query, page, key)

    .then(data =>
        this.setState(prevState=>({
         data: [...prevState.data, ...data],
         page: prevState.page+1,
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  handleSearch = queryOn => {
    this.setState({
      query: queryOn,
    });
  };



  render() {
    const { data, loading, error } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        {error && <p>ERORR</p>}
        {loading && <p>Loading...</p>}
        {loading ? <p>Loading...</p> : <ImageGallery data={data} />}
        {data.length>0 &&<Button handleClick={this.fetchData}/>}
        </div>
      );
  }
 }


// this.setState(prevStatr=>({

// }))