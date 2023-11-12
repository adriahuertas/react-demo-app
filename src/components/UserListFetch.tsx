// This component purpose is to fetch the data from the API and store it in the redux store

import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { setFetchIsDone, setUsers } from '../reducers/userListReducer'
import { useEffect } from 'react'
import Loading from './Loading'
import UserList from './UserList'
import { Box, Button } from '@mui/material'

// This is the component that will be rendered when the user want to access to the user list
// We use react query so that we can easily manage the loading and error states
// Also, react query deals with caching, so we don't have to worry about that

const UserListFetch = () => {
  const dispatch = useDispatch()

  // We use react query to fetch data from the API
  // This is a bit of overkilling with redux, but will allow
  // us to easily manage the loading and error states for the API call
  const { isLoading, error, data, refetch } = useQuery(['users'], async () => {
    // We fetch all the users from the API and we will deal with pagination ourselves
    const response = await fetch('https://reqres.in/api/users?per_page=12')
    const userData = await response.json()
    return userData
  })

  useEffect(() => {
    if (!isLoading && error === null && data !== null) {
      dispatch(setUsers(data.data))
      dispatch(setFetchIsDone())
    }
  }, [isLoading, error, data, dispatch])

  if (isLoading) {
    return <Loading />
  }

  if (error !== null) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 5 }}>
        <h2>Error conectando con la API</h2>
        <Button variant="contained" onClick={async () => await refetch()}>Intentar de nuevo</Button>
      </Box>)
  }

  // This component will render null because the redirection will happen in useEffect
  return <UserList />
}

export default UserListFetch
