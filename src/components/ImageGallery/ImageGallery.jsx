import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
//import { Test } from './ImageGallery.styles';

function ImageGallery({data}){
console.log(data);
return(
 <div>
      <ul className="ImageGallery">
  {  data.map(e=> <ImageGalleryItem key={e.id} src={e.webformatURL}/>
    )}

  </ul>
 </div>
)
}



export default ImageGallery;
