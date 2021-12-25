import React from 'react'
import Header from '../header/Header'
import './layoutstyles.css'
function Layout(props) {
    return (
        <div className = "layout_container" >
            <Header />
            {props.children}
        </div>
    )
}

export default Layout
