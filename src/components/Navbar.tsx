import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearUser, selectUserEmail, selectUserToken } from '../reducers/loggedUserReducer'

function Navbar() {
  const token = useSelector(selectUserToken)
  const email = useSelector(selectUserEmail)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const isLogged = token !== ''

  const handleLogout = () => {
    localStorage.removeItem('loggedUser')
    dispatch(clearUser())
    navigate('/')
  }

  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ userSelect: 'none' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            React Demo APP
          </Link>
        </Typography>

        {/* Botones de Login y Users */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
          <Button color="inherit">
            <Link to="/users" style={{ textDecoration: 'none', color: 'white' }}>
              Users
            </Link>
          </Button>
          {isLogged
            ? (<Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>)
            : (<Button color="inherit">
              <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                Login
              </Link>
            </Button>)}
        </Box>
        {isLogged && <small style={{ marginLeft: '25px' }}>Logged in as {email}</small>}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
