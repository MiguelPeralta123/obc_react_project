// CLASS COMPONENT
// Right before the component is updated -> ComponentDidUpdate()
import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Class component is about to be updated')
    }

    render() {
        return (
            <div>
                <h1>Class component</h1>
            </div>
        )
    }
}

// FUNCTIONAL COMPONENT
// Right before the component is updated -> useEffect(arrow function)
export function DidUpdateHook() {

    useEffect(() => {
        console.log('Functional component is about to be rendered')
    });

    return (
        <div>
            <h1>Functional component</h1>
        </div>
    )
}
