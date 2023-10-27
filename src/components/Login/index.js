import './index.css'
import { useState } from "react";

const Login = () => {
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [showSubmitErr,setShowSubmitErr] = useState(false)
    const [errorMsg,setErrorMsg] = useState("")

    const onSubmitSuccess = props => {
        const {history} = props
        history.replace('/')
    }

    const onSubmitFailure = errorMsg => {
        setErrorMsg(errorMsg)
        setShowSubmitErr(true)
    }

    const onChangeUsername = event => {
        setUserName(event.target.value)
    }

    const renderUserNameField = () => (
        <>
            <label htmlFor='username' className='input-label'>USERNAME</label>
            <input type='text' id='username' value={userName} className='username-input-field' placeholder='Enter username' onChange={onChangeUsername}/>
        </>
    )

    const onChangePassword = event => {
        setPassword(event.target.value)
    }

    const renderPasswordField = () => (
        <>
            <label htmlFor='password' className='input-label'>PASSWORD</label>
            <input type='text' id='password' value={password} className='password-input-field' placeholder='Enter password' onChange={onChangePassword}/>
        </>
    )

    const submitForm = async event => {
        event.preventDefault()
        const userDetails = {userName,password}
        console.log(userDetails)
        const url = 'https://apis.ccbp.in/login'
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(url,options)
        console.log(response)
        const data = await response.json()
        if (response.ok === true) {
            onSubmitSuccess()
        } else {
            onSubmitFailure(data.error_msg)
        }

    }
    return(
        <div>
            <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' className='logo-mobile-img' alt='website logo'/>
            <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png' alt='website login' className='login-desktop-img'/>
            <form className='form-container' onSubmit={submitForm}>
                <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' className='logo-desktop-img' alt='website logo'/>
                <div className='input-container'>{renderUserNameField()}</div>
                <div className='input-container'>{renderPasswordField()}</div>
                <button className='login-btn' type='submit'>Login</button>
                {showSubmitErr && <p className='error-msg'>*{errorMsg}</p>}
            </form>
        </div>
    )
}
export default Login

