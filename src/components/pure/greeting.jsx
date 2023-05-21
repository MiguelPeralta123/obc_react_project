import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            age: 23
        }
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <h2>Your are {this.state.age} years old.</h2>
                <button onClick={this.birthday}>Add year</button>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1,
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
