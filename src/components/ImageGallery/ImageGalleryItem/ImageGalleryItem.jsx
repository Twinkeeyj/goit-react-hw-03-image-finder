import React from 'react';
// import PropTypes from 'prop-types';


const ImageGalleryItem=function ({id,src}) {
 return(<>
<li  className="ImageGalleryItem">
  <img src={src} alt="" className="ImageGalleryItem-image" />
</li>
</>
)

}

export default ImageGalleryItem;
