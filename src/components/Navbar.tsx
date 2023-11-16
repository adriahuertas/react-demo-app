import { AppBar, Toolbar, Button, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearLoggedWithGithub, clearUser, selectUserEmail, selectUserLoggedWithGithub, selectUserToken } from '../reducers/loggedUserReducer'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'
import ReactIcon from './ReactIcon'

function Navbar() {
  const token = useSelector(selectUserToken)
  const email = useSelector(selectUserEmail)

  const loggedWithGithub = useSelector(selectUserLoggedWithGithub) as boolean

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const isLogged = token !== ''

  const handleLogout = async () => {
    localStorage.removeItem('loggedUser')
    dispatch(clearUser())
    navigate('/')
    if (loggedWithGithub) {
      dispatch(clearLoggedWithGithub())
      try {
        await signOut(auth)
      } catch {
        console.log('Ups. Something went wrong with Github Sign out')
      }
    }
  }

  return (
    <AppBar position="fixed" sx={{ width: '100%' }}>
      <Toolbar>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ReactIcon />
        </Link>
        {/* Botones de Login y Users */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1 }}>
          <Button color="inherit" sx={{ '@media (max-width: 450px)': { display: 'none' } }}>
            <Link to="/users" style={{ textDecoration: 'none', color: 'white' }}>
              Usuarios
            </Link>
          </Button>
          {isLogged
            ? (<Button color="inherit" onClick={handleLogout} sx={{ '@media (max-width: 450px)': { fontSize: '12px' } }}>
              Cerrar sesión
            </Button>)
            : (<Button color="inherit">
              <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                Login
              </Link>
            </Button>)}
          {isLogged &&
            <Button color="inherit" variant="text" sx={{ fontSize: '12px', marginLeft: '25px', textTransform: 'lowercase' }}>{email}</Button>
          }
        </Box>
      </Toolbar>
    </AppBar >
  )
}

export default Navbar
