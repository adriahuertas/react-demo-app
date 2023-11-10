import { UserInterface } from "../interfaces/User"

const User = ({ user }: { user: UserInterface }) => {
  return (
    <div>
      <img src={user.avatar} alt="avatar" />
      <h2>{user.firstName} {user.lastName}</h2>
      <p>{user.email}</p>
    </div>
  )
}

export default User
