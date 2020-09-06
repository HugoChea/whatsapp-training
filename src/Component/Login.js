import React from 'react'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { actionTypes } from '../reducer'
import { useGlobalState } from "../StateProvider"

function Login() {
    const [{user}, dispatch] = useGlobalState()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result =>
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        )
        .catch( (error) => alert(error.message))
    }
    

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-text">
                    <h1>Sign in</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign in with google
                </Button>
            </div>
        </div>
    )
}

export default Login
