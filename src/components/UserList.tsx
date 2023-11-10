import { useSelector } from "react-redux"
import { UserInterface } from "../interfaces/User"
import User from "./User"
import { Pagination } from "@mui/material"
import { useState } from "react"
import { selectUserList } from "../feature/userList/userSlice"
import Filter from "./Filter"
import { filterUsers } from "../utils"

// Display 6 users per page
const WINDOW_SIZE = 6

const UserList = () => {
  // Get All users from redux
  const users = useSelector(selectUserList)

  const [filter, setFilter] = useState("")

  // We only display 6 users per page
  const [usersToDisplay, setUsersToDisplay] = useState<UserInterface[]>(users.slice(0, 6))

  // Filtered users to display
  const [filteredUsersToDisplay, setFilteredUsersToDisplay] = useState<UserInterface[]>(usersToDisplay)

  // Number of available pages
  const count = users.length / WINDOW_SIZE

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault()

    setUsersToDisplay(users.slice((value - 1) * 6, value * 6))
    setFilteredUsersToDisplay(users.slice((value - 1) * 6, value * 6))

    setFilter("")
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value

    setFilter(newFilter)

    setFilteredUsersToDisplay(filterUsers(usersToDisplay, newFilter))
  }

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} filterValue={filter} />
      {
        filteredUsersToDisplay.map((user: UserInterface) => (
          <User user={user} key={user.email} />
        ))
      }
      <Pagination count={count} color="primary" onChange={handlePageChange} />
    </div>
  )
}

export default UserList
