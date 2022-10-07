import { useState } from 'react'
import { createAuthUserWithEmailAndPassword } from '../../../utils/firebase/firebase.utils'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { email, password, confirmPassword } = event.target

    if (password === confirmPassword) {
      createAuthUserWithEmailAndPassword(email, password)
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form action="">
        <label htmlFor="">Display Name</label>
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
        ></input>

        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignupForm
