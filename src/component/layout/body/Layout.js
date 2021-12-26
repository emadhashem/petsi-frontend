import React from 'react'
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Header from '../header/Header'
import './layoutstyles.css'
function Layout({ ...props }) {

    return (
        <div className="layout_container" >
            <Header />
            <div className='layout-content' >
                {props.children}
            </div>
        </div>
    )
}

export default connect()(Layout)
