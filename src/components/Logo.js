import React from 'react'
import ConectiLogo from '../assets/logo-conecti.svg'

function Logo({width, height}) {
    console.log(height)
    return (
        <img src={ConectiLogo} alt="ConectiLogo" width={width} height={height}/>
    )
}

export default Logo
