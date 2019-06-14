import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";

export default class Button1 extends Component {

    
    render() {
        return (
            <div className="button-space">
                <Button color="danger" className="is-medium" onClick={this.props.toggleButton}>
                    { !this.props.show ? <p>See more projects</p> : <p>Hide projects</p> }
                </Button>
            </div>
        )
    }
}
