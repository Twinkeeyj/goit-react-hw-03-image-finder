import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"

function ImageGallery({data, openModal}){

return(
 <div>
      <ul className="ImageGallery">
  {  data.map(e=> <ImageGalleryItem openModal={openModal} key={e.id} src={e.webformatURL} largeImageURL={e.largeImageURL}/>
    )}

  </ul>
 </div>
)
}
export default ImageGallery;
ImageGallery.propTypes={
  data: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
}
