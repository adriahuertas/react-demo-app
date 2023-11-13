import { type UserInterface } from './interfaces/interfaces'

// Filter users by first name and last name or firstname+lastname
export const filterUsers = (users: UserInterface[] | null, filter: string) => {
  if (users === null) return []
  return users.filter((user) => {
    return (
      user.first_name.toLowerCase().includes(filter.toLowerCase()) ||
      user.last_name.toLowerCase().includes(filter.toLowerCase()) ||
      // This last one is to search by first name + last name, otherwise it won't work if you search by fullname
      `${user.first_name} ${user.last_name}`
        .toLowerCase()
        .includes(filter.toLowerCase())
    )
  })
}
