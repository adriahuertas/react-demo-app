import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearUser, selectUserEmail } from '../reducers/loggedUserReducer'

function Navbar() {
  const email = useSelector(selectUserEmail)
  const dispatch = useDispatch()

  const isLogged = email !== ''

  const handleLogout = () => {
    localStorage.removeItem('loggedUser')
    dispatch(clearUser())
  }

  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar>
        {/* Título del AppBar */}
        <Typography variant="h6" sx={{ userSelect: 'none' }}>
          React Demo APP
        </Typography>

        {/* Botones de Login y Users */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
          <Button color="inherit">
            <Link to="/users" style={{ textDecoration: 'none', color: 'white' }}>
              Users
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
              Login
            </Link>
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
        {isLogged && <small style={{ marginLeft: '25px' }}>Logged in as {email}</small>}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
