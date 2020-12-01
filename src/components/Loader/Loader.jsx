import Loader from 'react-loader-spinner';
import React from 'react';

export default class Loaders extends React.Component {
  render() {
    return (
      <>
      <Loader
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
      <h1>{this.props.text}</h1>
      </>
    );
  }
}
