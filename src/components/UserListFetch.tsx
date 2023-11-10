// This component purpose is to fetch the data from the API and store it in the redux store

import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { setUsers } from '../feature/userList/userSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { setMessage } from '../feature/error/errorSlice'
import Loading from './Loading'

const UserServiceFetch = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // We use react query to fetch data from the API
  // This is a bit of overkilling with redux, but will allow
  // us to easily manage the loading and error states for the API call
  const { isLoading, error, data } = useQuery(['users'], async () => {
    // We fetch all the users from the API and we will deal with pagination ourselves
    const response = await fetch('https://reqres.in/api/users?per_page=12')
    const userData = await response.json()
    return userData
  })

  useEffect(() => {
    if (error !== null) {
      dispatch(setMessage('Error conectando con la API'))
      navigate('/error')
    }

    if (!isLoading && error === null && data !== null) {
      dispatch(setUsers(data.data))

      // If no error, redirect to the user list
      navigate('/users')
    }
  }, [isLoading, error, data, dispatch, navigate])

  if (isLoading) {
    return <Loading />
  }

  // This component will render null because the redirection will happen in useEffect
  return null
}

export default UserServiceFetch
