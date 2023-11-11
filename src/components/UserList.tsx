import { useSelector } from 'react-redux'
import { type UserInterface } from '../interfaces/interfaces'
import User from './User'
import { Box, Container, Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { selectUserList } from '../reducers/userListReducer'
import Filter from './Filter'
import { filterUsers } from '../utils'

// Display 6 users per page
const WINDOW_SIZE = 6

const UserList = () => {
  // Get All users from redux
  const users = useSelector(selectUserList)

  const [filter, setFilter] = useState('')

  // We only display 6 users per page
  const [usersToDisplay, setUsersToDisplay] = useState<UserInterface[] | null>(null)
  // Filtered users to display
  const [filteredUsersToDisplay, setFilteredUsersToDisplay] = useState<UserInterface[] | null>(null)

  // Number of available pages
  const count = users.length / WINDOW_SIZE

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault()

    setUsersToDisplay(users.slice((value - 1) * 6, value * 6))
    setFilteredUsersToDisplay(users.slice((value - 1) * 6, value * 6))

    setFilter('')
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value

    setFilter(newFilter)

    setFilteredUsersToDisplay(filterUsers(usersToDisplay, newFilter))
  }

  useEffect(() => {
    setUsersToDisplay(users.slice(0, WINDOW_SIZE))
    setFilteredUsersToDisplay(users.slice(0, WINDOW_SIZE))
  }, [users])

  return filteredUsersToDisplay !== null
    ? (
      <>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
          <div style={{ marginBottom: '25px' }}>
            <h2>Estos usuarios podrían gustarte</h2>
          </div>
          <div style={{ marginBottom: '25px' }}>
            <Filter handleFilterChange={handleFilterChange} filterValue={filter} />
          </div>
          <Container sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '35px' }}>
            {

              filteredUsersToDisplay.map((user: UserInterface) => (
                <User user={user} key={user.email} />
              ))
            }
          </Container>
          <Pagination sx={{ marginTop: '25px', marginBottom: '25px' }} count={count} color="primary" onChange={handlePageChange} />
        </Box>
      </>)
    : null
}

export default UserList
