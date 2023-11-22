import { useSelector } from 'react-redux'
import { type UserInterface } from '../interfaces/interfaces'
import User from './User'
import { Box, Grid, Pagination } from '@mui/material'
import { useMemo, useState } from 'react'
import { selectUserList } from '../reducers/userListReducer'
import Filter from './Filter'
import { filterUsers } from '../utils'

// Display 6 users per page
const WINDOW_SIZE = 6

const UserList = () => {
  // Get All users from redux
  const users = useSelector(selectUserList)

  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState('')
  // const [totalPages, setTotalPages] = useState(Math.ceil((users.length ?? 0) / WINDOW_SIZE))

  // Filtered users to display
  // const [filteredUsersToDisplay, setFilteredUsersToDisplay] = useState<UserInterface[]>(users)

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault()

    setCurrentPage(value)
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value

    setCurrentPage(1)

    setFilter(newFilter)
  }
  const filteredUsers = useMemo(() => {
    return filterUsers(users, filter)
  }, [users, filter])

  const filteredUsersToDisplay = useMemo(() => {
    const start = (currentPage - 1) * WINDOW_SIZE
    const end = start + WINDOW_SIZE

    return filteredUsers.slice(start, end)
  }, [filteredUsers, currentPage])

  const totalPages = useMemo(() => {
    return Math.ceil((filteredUsers.length ?? 0) / WINDOW_SIZE)
  }, [filteredUsers])

  return filteredUsersToDisplay !== null
    ? (
      <>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', flexGrow: 1 }}>
          <div style={{ marginBottom: '25px' }}>
            <h2>Estos usuarios podrían gustarte</h2>
          </div>
          <div style={{ marginBottom: '25px' }}>
            <Filter handleFilterChange={handleFilterChange} filterValue={filter} />
          </div>
          <Grid container spacing={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {

              filteredUsersToDisplay.map((user: UserInterface) => (
                <Grid
                  key={user.email}
                  item
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User user={user} />
                </Grid>
              ))
            }
          </Grid>
          <Pagination sx={{ marginTop: '25px', marginBottom: '25px' }} page={currentPage} count={totalPages} color="primary" onChange={handlePageChange} />
        </Box>
      </>)
    : null
}

export default UserList
