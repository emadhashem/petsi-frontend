import React from 'react'
import { connect, useDispatch } from 'react-redux'
import './headerStyles.css'
import SearchBar from './searchbar/SearchBar'
import * as userActions from '../../../redux/actions/userActions'
import { useHistory } from 'react-router-dom'
function Header({user}) {
    const dispatch = useDispatch()
    const go = useHistory()
    function logIut() {
        handleAllNullDispatches()
        go.push('/auth/login')
    }
    function handleAllNullDispatches() {
        dispatch(userActions.setUserEmail(null))
        dispatch(userActions.setUserId(null))
        dispatch(userActions.setUserImg(null))
        dispatch(userActions.setUserName(null))
        dispatch(userActions.setUserToken(null))
    }
    return (
        <div className='header_container' >
            <div className="petsiRound_">
                Pet<span className="si_">Si</span>
            </div>
            <SearchBar />
            {
                (user.id) && <p onClick={logIut} className='logout_holder'> LOGOUT </p>
            }
        </div>
    )
}
const mapStateToProps = ({user}) => ({
    user
})
export default connect(mapStateToProps)(Header)
