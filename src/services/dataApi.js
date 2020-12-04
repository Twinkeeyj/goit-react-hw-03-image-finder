import axios from 'axios';
import PropTypes from 'prop-types';

const fetchDataWithQuery = (query, page) => {
  const key = '18953404-219a87b5236596fa40acd8a55';
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};
export default {  fetchDataWithQuery,
};
fetchDataWithQuery.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
};
