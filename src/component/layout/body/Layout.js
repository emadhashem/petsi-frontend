import React from 'react'
import './layoutstyles.css'
function Layout(props) {
    return (
        <div className = "layout_container" >
            {props.children}
        </div>
    )
}

export default Layout
