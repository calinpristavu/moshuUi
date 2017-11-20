import React from "react";
import PropTypes from 'prop-types';

class ProductFigure extends React.Component {
    render() {
        return (
            <figure
                onMouseOver={this.props.onMouseOver}
                onMouseLeave={this.props.onMouseLeave}
                className="figure">
                <img
                    src={this.props.product.image}
                    className="figure-img img-fluid rounded"
                    alt={this.props.product.name}/>
                <figcaption
                    className="figure-caption">
                    {this.props.product.name}
                </figcaption>
            </figure>
        );
    }
}

ProductFigure.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
    onMouseOver: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired
};

export default ProductFigure;