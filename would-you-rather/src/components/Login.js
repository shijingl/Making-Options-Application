import React, {Component} from 'react'
// import Icon from './Icon'
// import { iconLib } from '../iconLib'

class Login extends Component {
    render() {
        return (
            <div className='signin-form'>
                <div className='signin-header'>
                    <p className='signin-title'>Would You Rather - login</p>
                </div>
                <div className='signin-body'>
                    <form action="">
                        <label className='sigin-body-p'>Select a user: </label>
                        <div className='signin-body-form'>
                            <select className='login-user-select' name="" id="">
                                <option className='test' value="" disabled>Please Select</option>
                                <option className='test' value="oahmaro">oahmaro</option>
                                <option className='test' value="oahmaro">myaghi</option>
                            </select> 
                        </div>

                        <button className='sign-in-button'>SIGN IN</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login