import { Avatar, Box, Card } from '@mui/material'
import { type UserInterface } from '../interfaces/interfaces'

const User = ({ user }: { user: UserInterface }) => {
  const { avatar, first_name: firstName, last_name: lastName, email } = user
  return (
    <Card sx={{ minWidth: '350px', display: 'flex', padding: '20px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ width: 75, height: 75 }} src={avatar} alt="avatar" />
      </Box>
      <Box sx={{ paddingLeft: '25px', display: 'flex', flexDirectin: 'row', alignItems: 'center' }}>
        <div>
          <h2>{firstName} {lastName}</h2>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </Box>
    </Card >
  )
}

export default User
