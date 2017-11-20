import React from "react";

class WhatYouWant extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        console.log(formData.getAll("budget"));
    }

    render() {
        return (
            <div>
                <h3>
                    fa-mi ce vrei tu cam de
                    <form id="what-you-want" onSubmit={(e) => this.handleSubmit(e)}>
                        <input
                            name="budget"
                            className="d-inline-block form-control"
                            defaultValue={30}
                            style={{width: "100px"}}
                            type="number"/>

                        <button type="submit">
                            Save
                        </button>
                    </form>
                    lei
                </h3>
            </div>
        );
    }
}

export default WhatYouWant;