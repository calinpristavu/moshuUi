import React from "react";
import Product from "./Product";
import Sample from 'lodash.sample';
import {connect} from "react-redux";

class ProductSuggestions extends React.Component {
    constructor() {
        super();

        this.state = {
            suggestion: null
        }
    }

    suggest(e) {
        this.setState({
            suggestion: Sample(this.props.products)
        });
    }

    render() {
        return (
            <div>
                <h3 onClick={(e) => this.suggest(e)}>Da-mi o sugestie!</h3>
                {
                    this.state.suggestion
                        ? <Product product={this.state.suggestion}/>
                        : ''
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.list
    }
};

export default connect(mapStateToProps)(ProductSuggestions);