import React, { Component, Fragment } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

class Account extends Component {
    render () {
        const { authedUser, avatar } = this.props
        return (
            <Fragment>
                <ul className='nav nav-account'>
                    <li>
                        Logout
                    </li>
                    <li className='padding-left'>
                        <img 
                            src={avatar}
                            alt={`Avatar of ${authedUser}`}
                            className='profile-pic scale-down'/>
                    </li>
                    <li className='padding-zero'>
                        {authedUser}
                    </li>
                </ul>
            </Fragment>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    console.log("the authed in account user is:", authedUser)
    console.log("users in account are:", users)

    const avatar = users[authedUser].avatarURL
    return {
        authedUser, 
        avatar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthedUser: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Account)