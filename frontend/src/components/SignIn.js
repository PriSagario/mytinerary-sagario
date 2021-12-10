import { useRef } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import { Link } from 'react-router-dom'


function SignInP(props) {
    const email = useRef()
    const password = useRef()

    function handleSignInP(e) {
        e.preventDefault()
        props.signIn(email.current.value, password.current.value)
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
                            <input type="text" className='signInBtn' placeholder='Email' ref={email} required="true" />
                            <input type="text" className='signInBtn' placeholder='Password' ref={password} required="true" />
                            <input type="submit" className='signInBtn' value="Sign in" />
                        </div>
                    </form>
                    <div>
                        <p>You don't have an account yet?</p>
                        <Link to="/auth/signUp" className='linkSignIn'>
                            Sign up
                        </Link>
                    </div>

                </div>
            </div>
            <div className='propsSignIN'>
                <h1>Name: {props.user.name}</h1>
                <h1>Lastname: {props.user.lastname}</h1>
                <h1>Email: {props.user.email}</h1>
                <h1>Photo: <img src={props.user.photo} /> || "Upload a photo"</h1>
                <h1>Country: {props.user.country || "Select a country"}</h1>
            </div>

        </div>
    )
}

const mapDispatchToProps = {
    signIn: authActions.signIn,
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.authReducer.user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInP)