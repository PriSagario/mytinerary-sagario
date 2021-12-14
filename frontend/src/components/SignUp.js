import authActions from '../redux/actions/authActions'
import {  useRef } from 'react'
import { connect } from 'react-redux'
import countries from './Countries'
import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

function SignUpP(props) {
    let navigate = useNavigate()
    localStorage.getItem("token") && !props.token && props.tokenDale()
    props.token && navigate("/", {replace: true})

    const responseGoogle = (response) => {
        let googleUser = {
            name: response.profileObj.givenName,
            lastname: response.profileObj.familyName,
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            country: "Argentina",
            photo: response.profileObj.imageUrl,
            google: true
        }

        props.postUser(googleUser)

    }

    const name = useRef()
    const lastname = useRef()
    const password = useRef()
    const email = useRef()
    const country = useRef()
    const photo = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        props.postUser({
            name: name.current.value,
            lastname: lastname.current.value,
            password: password.current.value,
            email: email.current.value,
            country: country.current.value,
            photo: photo.current.value,
        })

        name.current.value = ""
        lastname.current.value = ""
        password.current.value = ""
        email.current.value = ""
        country.current.value = ""
        photo.current.value = ""
    }


 

    return (
        <div className="backgroundSign">
            <div className="cardSignUp">
                <div>
                    <h1 className='titleSignIn'>Your dream destination is about to begin</h1>
                    <h3 className='subtitle'>Sign up MyTinerary</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='bodyFormSU'>
                            <div className='onlyInputs'>
                            <div className='inputName'>
                                <label>Name</label>
                                <input type="text" id="name" className='labelSU' ref={name}
                                 required minLength="3" maxLength="20" />
                            </div>
                            <div className='inputLastame'>
                                <label>Lastname</label>
                                <input type="text" id="lastname" className='labelSU' ref={lastname} 
                                required minLength="3" maxLength="20"/>
                            </div>
                            <div className='inputEmail'>
                                <label>Email</label>
                                <input type="text" id="email" className='labelSU' ref={email} required/>
                            </div>
                            <div className='inputPassword'>
                                <label>Password</label>
                                <input type="password" id="password" className='labelSU' ref={password}
                                 required minLength="8" maxLength="20" />
                            </div>
                            <div className='inputPhoto'>
                                <label>Photo</label>
                                <input type="text" id="photo" className='labelSU' ref={photo} required />
                            </div>
                            <div className='inputCountry'>
                                <label>Country</label>
                                <select type="text" id="country" className='labelCountry' ref={country}>
                                    {countries.sort().map((country, index) => {
                                        return (
                                            <option value="country" key={index} className='color-country'>{country}</option>
                                        )
                                    })}
                                </select>
                            </div>
                                
                            </div>
                            <div className='buttonsSignUp'>
                            <input type="submit" className='btn-warning p-2 fs-9 fw-normal m-1' value="Sign up" />
                                <GoogleLogin
                                    className='googleBtn'
                                    clientId="441570016693-8sblie0ro7jmdcrk5lb0nphcl4ug15kl.apps.googleusercontent.com"
                                    buttonText="Sign Up with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                            <div className='backToSignUp'>
                                <p>Do you already have an account?</p>
                                <Link to="/auth/signIn" className='linkSignIn'>
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    postUser: authActions.postUser,
    tokenDale: authActions.tokenDale,
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user,
        token: state.authReducer.token,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpP)