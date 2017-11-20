import React from "react";
import ProductSuggestions from "../ProductSugestions";
import WhatYouWant from '../WhatYouWant';

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <h2>Nu stiu ce vreau!</h2>
                <ProductSuggestions/>
                <WhatYouWant/>
            </div>
        );
    }
}

export default Sidebar;