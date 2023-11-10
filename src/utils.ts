import { UserInterface } from "./interfaces/User"

// Filter users by first name and last name
export const filterUsers = (users: UserInterface[], filter: string) => {
  return users.filter((user) => {
    return (
      user.first_name.toLowerCase().includes(filter.toLowerCase()) ||
      user.last_name.toLowerCase().includes(filter.toLowerCase())
    )
  })
}
