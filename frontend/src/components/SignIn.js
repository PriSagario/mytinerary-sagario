import { useRef } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import { Link } from 'react-router-dom'
import GoogleLogin from "react-google-login"
import { useNavigate } from "react-router-dom"


function SignInP(props) {
    let navigate = useNavigate()
    const responseGoogle = (response) => {

        props.signIn(
            response.profileObj.email,
            response.profileObj.googleId,
            true
        )
    }

    localStorage.getItem("token") && !props.token && props.tokenDale()
    
    props.token && navigate("/", {replace: true})
    

    const email = useRef()
    const password = useRef()

    function handleSignInP(e) {
        e.preventDefault()
        props.signIn(
            email.current.value,
            password.current.value)

        email.current.value = ""
        password.current.value = ""
    }
    return (
        <div className="backgroundSign">
            <div className="cardSign">
                <div>
                    <h1 className='titleSignIn'>Your dream destination is about to begin</h1>
                    <p>Sign in MyTinerary</p>
                    <form onSubmit={handleSignInP}>
                        <div className='inputsSignIn'>
                            <input type="text" className='signInBtn' placeholder='Email' ref={email} required={true }/>
                            <input type="password" className='signInBtn' placeholder='Password' ref={password} required={true } />
                            <input type="submit" className='signInBtn' value="Sign in" />
                        </div>
                    </form>
                    <GoogleLogin
                        clientId="441570016693-8sblie0ro7jmdcrk5lb0nphcl4ug15kl.apps.googleusercontent.com"
                        buttonText="Sign In with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                    />
                    <div>
                        <p>You don't have an account yet?</p>
                        <Link to="/auth/signUp" className='linkSignIn'>
                            Sign up
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    signIn: authActions.signIn,
    tokenDale: authActions.tokenDale,
}

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInP)