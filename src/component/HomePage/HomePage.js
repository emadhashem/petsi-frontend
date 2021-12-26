import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
const HomePage =({user})=>{
    const go = useHistory()
    useEffect(() => {
        if(!user.id) {
            go.push('/auth/login')
            return
        }
    }, [user.id])
    return(
        <div>
            <h2>Home Page is Called</h2>
        </div>
    )
}
const mapStateToProps = ({user}) => ({
    user
})
export default connect(mapStateToProps)(HomePage);