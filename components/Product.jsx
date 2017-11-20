import React from "react";
import PropTypes from 'prop-types';
import Popover from 'react-popover';
import ProductFigure from "./ProductFigure";
import PopupBody from "./PopupBody";

class Product extends React.Component {
    state = {
        isOpen: false
    };

    constructor() {
        super();

        this.openPopover = this.openPopover.bind(this);
        this.closePopover = this.closePopover.bind(this);
    }

    openPopover() {
        if (this.state.isOpen) {
            return;
        }
        this.setState({
            isOpen: true
        })
    }

    closePopover() {
        if (!this.state.isOpen) {
            return;
        }
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <Popover
                body={[
                    <div key={0}>{this.props.product.name}</div>,
                    <PopupBody
                        product={this.props.product}
                        key={1}/>
                ]}
                preferPlace="row"
                isOpen={this.state.isOpen}
                children={<ProductFigure
                    key={0}
                    product={this.props.product}
                    onMouseOver={this.openPopover}
                    onMouseLeave={this.closePopover}
                />}
            />
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;