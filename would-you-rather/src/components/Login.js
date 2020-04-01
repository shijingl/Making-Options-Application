import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    state = {
        selectedUser: '',
        toHome: false,
    }

    handleLogin = () => {
        const { selectedUser } = this.state
        const { setAuthedUser } = this.props

        if (selectedUser) {
            setAuthedUser(selectedUser)
        } else alert('Select a user!')

        this.setState(() => ({
            toHome: true
        }))
    }

    onSelectUser = (selectedUser) => this.setState({ selectedUser })

    render() {
        const { users } = this.props
        const { selectedUser, toHome } = this.state
        const { from } = this.props.location.state || { from: { pathname: '/dashboard'}}

        if (users === undefined) {
            return null
        }

        //if authenticated
		if(toHome) {
			return <Redirect to={from} />
        }
        
        return (
            <Fragment>
                <div className='form signin-form'>
                    <div className='form-header'>
                        <p className='form-title'>Would You Rather - login</p>
                    </div>
                    <div className='form-body'>
                        <form onSubmit={this.handleLogin}>
                            <label className='sigin-body-p'>Select a user: </label>
                            <div className='signin-body-form'>
                                <img
                                    src={selectedUser === ''
                                    ? 'http://www.masscue.org/wp-content/uploads/2017/03/male-no-image.jpg'
                                    : users[selectedUser].avatarURL}
                                    alt={users[selectedUser]}
                                    className='profile-pic'
                                /> 
                                <select 
                                    className='login-user-select'
                                    value={selectedUser}
                                    onChange={(e)=>this.onSelectUser(e.target.value)}>
                                    <option value=""> Select User </option>
                                    {
                                        Object.keys(users).map(user =>
                                            <option className='test' key={user} value={user}>
                                                {user}
                                            </option>)
                                    }
                                </select> 
                            </div>

                            <button className='button'>SIGN IN</button>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        users
    }
}

const mapDispatchToProps = {
    setAuthedUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))