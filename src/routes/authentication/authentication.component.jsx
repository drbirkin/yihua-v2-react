
import SignupForm from '../../components/sign-up/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-up/sign-in-form/sign-in-form.component'
import './authentication.styles.scss'
// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'


// const GoogleUserRedirectLogIn = async () => {
//   const response = await signInWithGoogleRedirect()
//   // const userDocRef = await createUserDocumentFromAuth(response.user)
//   console.log(response)
// }

const Authentication = () => {
  //! redirect
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth)
  //   // console.log(response)
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //   }
  // }, [])

  return (
    <div className='authentication-container'>
      <SignInForm />

      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
      <SignupForm />
    </div>
  )
}

export default Authentication
