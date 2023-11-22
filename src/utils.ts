import { type UserInterface } from './interfaces/interfaces'

// Filter users by first name and last name or firstname+lastname
export const filterUsers = (users: UserInterface[] | null, filter: string) => {
  if (users === null) return []
  if (filter === '') return users

  return users.filter((user) => {
    return (
      // Search by first name + last name, otherwise it won't work if you search by fullname
      `${user.first_name} ${user.last_name}`
        .toLowerCase()
        .includes(filter.toLowerCase())
    )
  })
}
