import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { type SyntheticEvent, useState } from 'react'
import loginService from '../services/login'
import { useDispatch } from 'react-redux'
import { setUser } from '../reducers/loggedUserReducer'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  // This is a local error state, not the global error state, used to display errors in login
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const handleClickShowPassword = () => { setShowPassword((show) => !show) }

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault()
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const credentials = { email, password }

    const token = await loginService.login(credentials)

    if (token === null) {
      // Error
      setError('Error en el login. El email o la contraseña son incorrectos o el usuario no existe')
      // Error displayed for 5 seconds only
      setTimeout(() => {
        setError('')
      }, 5000)
    } else {
      // Save user in localstorage
      localStorage.setItem('loggedUser', JSON.stringify({ token, email }))
      // Set user state
      dispatch(setUser({ token, email }))
    }

    // Clear the form
    setEmail('')
    setPassword('')
  }

  return (
    <Box>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          onChange={(e) => { setEmail(e.target.value) }}
          value={email}
          placeholder="user@example.com"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment:
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
          }}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            onChange={(e) => { setPassword(e.target.value) }}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button type="submit" disabled={email.length === 0 || password.length === 0} variant="contained">Sign In</Button>
      </form>
      {
        error !== '' &&
        <div style={{ textAlign: 'center', width: '100%', color: 'red' }}>
          <small>{error}</small>
        </div>
      }
    </Box>
  )
}

export default Login
