import authActions from '../redux/actions/authActions'
import { useRef } from 'react'
import { connect } from 'react-redux'

function SignUpP(props) {
    const { email, password, name, lastname, photo, country } = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        props.postUser(
            email.current.value,
            password.current.value,
            name.current.value,
            lastname.current.value,
            photo.current.value,
            country.current.value
        )

        email.current.value = ""
        password.current.value = ""
        name.current.value = ""
        lastname.current.value = ""
        photo.current.value = ""
        country.current.value = ""
    }

    return (
        <div className="backgroundSign">
            <div className="cardSign">
                <div>
                    <h1 className='titleSignIn'>Your dream destination is about to begin</h1>
                    <p>Sign up MyTinerary</p>
                    <form onSubmit={handleSubmit}>
                        <div className='bodyFormSU'>
                            <div className='inputName'>
                                <label>Name</label>
                                <input type="text" id="name" className='labelSU' ref={name} />
                            </div>
                            <div className='inputLastame'>
                                <label>Lastname</label>
                                <input type="text" id="lastname" className='labelSU' ref={lastname} />
                            </div>
                            <div className='inputEmail'>
                                <label>Email</label>
                                <input type="text" id="email" className='labelSU' ref={email} />
                            </div>
                            <div className='inputPhoto'>
                                <label>Photo</label>
                                <input type="text" id="photo" className='labelSU' ref={photo} />
                            </div>
                            <div className='inputCountry'>
                                <label>Country</label>
                                <select type="text" id="country" className='labelCountry' ref={country}>
                                    <option valu="ar">Argentina</option>
                                    <option valu="br">Brasil</option>
                                    <option valu="co">Colombia</option>
                                </select>
                            </div>
                        </div>
                        <input type="submit" value="Sign up" />
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    postUser: authActions.postUser
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.authReducer.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpP)