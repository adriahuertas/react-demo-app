import { UserInterface } from "../interfaces/User"
import User from "./User"

const UserList = () => {
  // Dummy user list with 5 users
  const dummy_user = [
    { avatar: "https://avatars.githubusercontent.com/u/74275518?v=4", firstName: "Pablo", lastName: "Pedro", email: "pablo@example.com" },
    { avatar: "https://avatars.githubusercontent.com/u/74275518?v=4", firstName: "Pablo", lastName: "Pedro", email: "pablo@example.com" },
    { avatar: "https://avatars.githubusercontent.com/u/74275518?v=4", firstName: "Pablo", lastName: "Pedro", email: "pablo@example.com" },
    { avatar: "https://avatars.githubusercontent.com/u/74275518?v=4", firstName: "Pablo", lastName: "Pedro", email: "pablo@example.com" },
    { avatar: "https://avatars.githubusercontent.com/u/74275518?v=4", firstName: "Pablo", lastName: "Pedro", email: "pablo@example.com" },
  ]

  return (
    <div>
      {
        dummy_user.map((user: UserInterface) => (
          <User user={user} />
        ))
      }
    </div>
  )
}

export default UserList
