import React from 'react'
import PropTypes from "prop-types"

function Button ({handleClick}) {
  return(
    <>
    <button type="button" onClick={handleClick} className={Button}>more</button>
    </>
  )
  };
export default Button;

Button.propTypes={
  onClick: PropTypes.func.isRequired,
}