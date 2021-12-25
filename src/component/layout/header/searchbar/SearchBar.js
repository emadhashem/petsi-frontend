import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './searchbarstyles.css'
const SearchBar = ({ user }) => {
    return (
        (user.id) && <div className='searchbar_container' >
            <input type="text" className='input_search' />
        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})



export default connect(mapStateToProps)(SearchBar)
