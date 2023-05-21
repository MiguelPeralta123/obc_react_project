import React, { Component, useEffect } from 'react'

// CLASS COMPONENT
// Right before the component disappear -> ComponentWillUnmount()
export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Class component is about to disappear')
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
// Right before the component disappear -> useEffect(arrow function)
export function WillUnmountHook() {

    useEffect(() => {
        return () => {
            console.log('Functional component is about to disappear')
        };
    }, []);

  return (
    <div>
        <h1>Functional component</h1>
    </div>
  )
}
