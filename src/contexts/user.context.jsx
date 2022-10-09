import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener, signOutUser } from '../utils/firebase/firebase.utils'

/**
 create context variable (actual value)
 * @{...} default value when not matching Provider above in the tree  
 * */
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})
const useEffectHandler = () =>
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => { console.log(user) })
        return unsubscribe
    }, [])

/**
 provider (actual component)
 * @children components 
 * @value context value
 *  */
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }
    signOutUser()

    useEffectHandler()

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}