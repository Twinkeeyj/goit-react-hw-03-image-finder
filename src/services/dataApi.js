import axios from 'axios';

const fetchDataWithQuery=(query, page,key)=>{
  return axios
  .get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  )
  .then(response => response.data.hits)
  //   this.setState({
  //     data: response.data.hits,
  //   });
  // })
  // .catch(error => this.setState({ error }))
  // .finally(() => this.setState({ loading: false }));
}
export default{
  fetchDataWithQuery,
}