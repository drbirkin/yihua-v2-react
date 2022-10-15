import { useState, useContext } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.utils'
import FormInput from '../../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../../button/button.component'
import { SignUpContainer } from './sign-up-form.style.jsx'
import { UserContext } from '../../../contexts/user.context'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const { setCurrentUser } = useContext(UserContext)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      console.error('Incorrect credentials !')
      return
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      setCurrentUser(response.user)
      await createUserDocumentFromAuth(response.user, { displayName })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <SignUpContainer>
      <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        {/* <label htmlFor="">Display Name</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></input>
        <label htmlFor="">Email</label>
        <input
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        ></input>
        <label htmlFor="">Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        ></input>
        <label htmlFor="">Confirm Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></input> */}

        {/* <button type="submit">
          Sign Up
        </button> */}
        <Button
          children={'Sign Up'}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        />
      </form>
    </SignUpContainer>
  )
}

export default SignupForm
