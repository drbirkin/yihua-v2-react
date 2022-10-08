import { useState } from 'react'
import {
    signInWithGooglePopup,
    signInWithGoogleRedirect, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth
} from '../../../utils/firebase/firebase.utils'
import FormInput from '../../form-input/form-input.component'
import Button from '../../button/button.component'
import './sign-in-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
}

const GoogleUserLogIn = async () => {
    const response = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(response.user)
    console.log(response)
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password } = formFields

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            // const response = await createAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            // await createUserDocumentFromAuth(response.user, { displayName })
        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    console.error('incorrect infos!')
                    break

                case 'auth/user-not-found':
                    console.error('user not found!')
                    break
                default:
                    console.error(err)
            }
        }
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form action="" onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    required
                    type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName} />
                <FormInput
                    label='Email'
                    required
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email} />
                <FormInput
                    label='Password'
                    required
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password} />
                <div className='buttons-container'>
                    <Button children={'Sign In'} buttonType={'inverted'} type='submit' />
                    <Button children={'Sign In with Google Popup'} buttonType={'Google'} onClick={GoogleUserLogIn} type='button' />
                </div>
            </form>
        </div>
    )
}

export default SignInForm
