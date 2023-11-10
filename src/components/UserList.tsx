import { useSelector } from "react-redux"
import { UserInterface } from "../interfaces/User"
import User from "./User"
import { Pagination } from "@mui/material"
import { useState } from "react"
import { selectUserList } from "../feature/userList/userSlice"

// Display 6 users per page
const WINDOW_SIZE = 6

const UserList = () => {
  // Get All users from redux
  const users = useSelector(selectUserList)
  console.log(users)

  // We only display 6 users per page
  const [usersToDisplay, setUsersToDisplay] = useState<UserInterface[]>(users.slice(0, 6))

  // Number of available pages
  const count = users.length / WINDOW_SIZE

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault()
    setUsersToDisplay(users.slice((value - 1) * 6, value * 6))
  };

  return (
    <div>
      {
        usersToDisplay.map((user: UserInterface) => (
          <User user={user} />
        ))
      }
      <Pagination count={count} color="primary" onChange={handleChange} />
    </div>
  )
}

export default UserList
