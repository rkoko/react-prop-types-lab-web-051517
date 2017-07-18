// Code Product Component Here
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'



class Product extends React.Component{
  render(){
    return(
      <div classname="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark ? 'True':'False'}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined){
      return new Error('The `weight` prop is required.')
    }
    if (isNaN(weight)){
      return new Error('The `weight` prop is not a number.');
    }
    const isValidWeight = weight >80 && weight <300

    if (!isValidWeight){
      return new Error('The `weight` prop should range between 80 and 300.')
    }

  },
}

export default Product;


// weight: a number — required, ranges between 80 and 300
// Note: for the weight prop, we'll need custom logic. Remember that it's possible to write your own prop validator function!
