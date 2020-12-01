import React, {Component} from 'react';
import PropTypes from 'prop-types';



export default class ImageGalleryItem extends Component {
  static propTypes={
onClick: PropTypes.func
  }

  newModal=(e)=>{
   this.props.openModal(this.props.largeImageURL)
  }
  render(){
 return(
 <>
<li  className="ImageGalleryItem" onClick={this.newModal}>
  <img key={this.props.largeImageURL} src={this.props.src}  className="ImageGalleryItem-image"  />
</li>
</>
)
 }
}

