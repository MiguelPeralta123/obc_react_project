import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GreetingF = (props) => {

    // const [variable, mehtodToModifyState] = useState(initialValue);
    const [age, setAge] = useState(23);

    const birthday = () => {
        setAge(age + 1);
    }

    return (
        <div>
            <h1>Hello { props.name }!</h1>
            <h2>Your are { age } years old</h2>
            <button onClick={ birthday }>Add year</button>
        </div>
    )
}

GreetingF.propTypes = {
    name: PropTypes.string,
}

export default GreetingF
