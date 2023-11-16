import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'
import type { RootState, AppDispatch } from './store'
import loginService from './services/login'

import {
  GithubAuthProvider,
  type UserCredential,
  signInWithPopup
} from 'firebase/auth'
import { auth } from './firebase/config'
import { useState } from 'react'
import { setLoggedWithGithub, setUser } from './reducers/loggedUserReducer'
import { useNavigate } from 'react-router-dom'
import { type Credentials } from './interfaces/interfaces'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Hook to login through email and password
export const useEmailLogin = () => {
  const [isError, setIsError] = useState<boolean>(false)
  const [isPending, setIsPending] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (credentials: Credentials) => {
    setIsError(false)
    setIsPending(true)
    try {
      const token = await loginService.login(credentials)
      if (token === null) {
        setIsError(true)
      } else {
        const { email } = credentials
        dispatch(setUser({ token, email }))
        localStorage.setItem('loggedUser', JSON.stringify({ token, email }))
        navigate('/')
      }
    } catch (error) {
      setIsError(true)
    } finally {
      setIsPending(false)
    }
  }
  return { login, isError, isPending }
}

// Hook to login with Github
export const useLogin = () => {
  const [error, setError] = useState<boolean | string | null>(false)
  const [isPending, setIsPending] = useState<boolean | null>(false)
  const dispatch = useDispatch()
  const provider = new GithubAuthProvider()
  const navigate = useNavigate()

  const login = async () => {
    setError(null)
    setIsPending(true)

    try {
      const res: UserCredential = await signInWithPopup(auth, provider)
      if (res === null) {
        throw new Error('Could not complete signup')
      }

      const user = res.user
      const token = (user as any).accessToken
      const email = user.email as string
      setIsPending(false)
      dispatch(setUser({ token, email }))
      dispatch(setLoggedWithGithub())
      localStorage.setItem('loggedUser', JSON.stringify({ token, email }))
      navigate('/')
    } catch (error) {
      setError((error as Error).message)
      setIsPending(false)
    }
  }

  return { login, error, isPending }
}
