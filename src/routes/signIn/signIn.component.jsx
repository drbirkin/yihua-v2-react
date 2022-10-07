import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const GoogleUserLogIn = async () => {
  const response = await signInWithGooglePopup()
  const userDocRef = await createUserDocumentFromAuth(response.user)
  console.log(response)
}

const SignIn = () => (
  <div>
    <h1>SignIn page</h1>
    <button onClick={GoogleUserLogIn}>Sign In with Google Popup</button>
  </div>
)

export default SignIn
