import { type UserInterface } from './interfaces/interfaces'

// Filter users by first name and last name
export const filterUsers = (users: UserInterface[] | null, filter: string) => {
  if (users === null) return []
  return users.filter((user) => {
    return (
      user.first_name.toLowerCase().includes(filter.toLowerCase()) ||
      user.last_name.toLowerCase().includes(filter.toLowerCase())
    )
  })
}
