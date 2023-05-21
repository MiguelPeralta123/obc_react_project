import React, { Component, useEffect } from 'react'

// CLASS COMPONENT
// Right before the component is rendered -> ComponentDidMount()
export class DidMount extends Component {

    componentDidMount() {
        console.log('Class component is about to be rendered')
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
// Right before the component is rendered -> useEffect(arrow function, [])
export function DidMountHook() {

    useEffect(() => {
        console.log('Functional component is about to be rendered')
    }, []);

    return (
        <div>
            <h1>Functional component</h1>
        </div>
    )
}
