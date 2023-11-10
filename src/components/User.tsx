import { type UserInterface } from '../interfaces/User'

const User = ({ user }: { user: UserInterface }) => {
  const { avatar, first_name: firstName, last_name: lastName, email } = user
  return (
    <div>
      <img src={avatar} alt="avatar" />
      <h2>{firstName} {lastName}</h2>
      <p>{email}</p>
    </div>
  )
}

export default User
