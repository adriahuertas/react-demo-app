import { Avatar, Box, Card } from '@mui/material'
import { type UserInterface } from '../interfaces/interfaces'
import { useState } from 'react'

const User = ({ user }: { user: UserInterface }) => {
  const { avatar, first_name: firstName, last_name: lastName, email } = user
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const removeFocus = () => {
    setIsFocused(false)
  }

  return (
    <Box sx={{ backgroundColor: 'rgba(0,0,0, 0.1)', minWidth: { xs: '310px', sm: '350px' }, width: { xs: '315px' } }} >
      <Card sx={{
        display: 'flex',
        padding: '20px',
        transition: 'transform 0.3s ease',
        transform: isFocused ? 'translate(5px, -5px)' : 'none'
      }}
        onMouseEnter={handleFocus}
        onMouseLeave={removeFocus}>
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
    </Box>
  )
}

export default User
