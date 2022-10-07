import {
  // auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import SignupForm from '../../components/sign-up/sign-up-form/sign-up-form.component'
// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'

const GoogleUserLogIn = async () => {
  const response = await signInWithGooglePopup()
  const userDocRef = await createUserDocumentFromAuth(response.user)
  console.log(response)
}
// const GoogleUserRedirectLogIn = async () => {
//   const response = await signInWithGoogleRedirect()
//   // const userDocRef = await createUserDocumentFromAuth(response.user)
//   console.log(response)
// }

const SignIn = () => {
  //! redirect
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth)
  //   // console.log(response)
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //   }
  // }, [])

  return (
    <div>
      <h1>SignIn page</h1>
      <button onClick={GoogleUserLogIn}>Sign In with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
      <SignupForm />
    </div>
  )
}

export default SignIn
