import React from 'react'
import { useState } from 'react'

export default function GreetingStyled(props) {

    const [logged, setLogged] = useState(false);

    const stylesLogged = {
        'color': 'green'
    }

    const stylesUnlogged = {
        'color': 'red'
    }

    return (
        <div>
            <h1 style={ logged ? stylesLogged : stylesUnlogged }>{ logged ? `Hello ${props.name}` : 'Please login' }</h1>
            <button onClick={() => {
                setLogged(!logged)
                console.log(props.name, ' is now ', logged ? 'disconnected' : 'connected')
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    )
}
