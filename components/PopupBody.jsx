import React from "react";
import PropTypes from 'prop-types';

class PopupBody extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.product.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <img
                    src={this.props.product.image}
                    alt={this.props.product.name}/>
            </div>
        )
    }
}

PopupBody.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(
            PropTypes.string.isRequired
        )
    })
};

export default PopupBody;