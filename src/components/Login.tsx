import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { type SyntheticEvent, useState, useEffect } from 'react'
import { useEmailLogin, useLogin } from '../hooks'
import GitHubIcon from '@mui/icons-material/GitHub'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  // This is a local error state, not the global error state, used to display errors in login
  const [error, setError] = useState('')

  const handleClickShowPassword = () => { setShowPassword((show) => !show) }

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault()
  }

  // const handleSubmit = async (e: SyntheticEvent) => {
  //   e.preventDefault()
  //   const credentials = { email, password }

  //   // Clear the form
  //   setEmail('')
  //   setPassword('')

  //   const token = await loginService.login(credentials)

  //   if (token === null) {
  //     // Error
  //     setError('Error en el login. El email o la contraseña son incorrectos o el usuario no existe')
  //     // Error displayed for 5 seconds only
  //     setTimeout(() => {
  //       setError('')
  //     }, 5000)
  //   } else {
  //     // Save user in localstorage
  //     localStorage.setItem('loggedUser', JSON.stringify({ token, email }))
  //     // Set user state
  //     dispatch(setUser({ token, email }))
  //     // Redirect to home
  //     navigate('/')
  //   }
  // }

  const { login: handleEmailLogin, isPending: isEmailPending, isError } = useEmailLogin()

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    const credentials = { email, password }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleEmailLogin(credentials)

    // Clear the form
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    if (isError) {
      // Error
      setError('Error en el login. El email o la contraseña son incorrectos o el usuario no existe')
      // Error displayed for 5 seconds only
      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }, [isError])

  const { login: handleGithubLogin, isPending } = useLogin()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Inicia sesión para acceder a la lista de usuarios</h2>
      <Box sx={{ maxWidth: '400px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
            placeholder="user@example.com"
            id="outlined-start-adornment"
            sx={{ mb: 2 }}
            fullWidth
            name="email"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
            }}
          />
          <FormControl sx={{ mb: 2 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput

              onChange={(e) => { setPassword(e.target.value) }}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              name="password"
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
          <Button
            fullWidth sx={{ mb: 2, height: '56px' }}
            type="submit"
            disabled={email.length === 0 || password.length === 0}
            variant="contained">
            {isEmailPending ? 'CARGANDO' : 'Iniciar sesión con Email'}</Button>
          <Button sx={{ mb: 2, height: '56px' }} fullWidth className="btn" onClick={handleGithubLogin} variant="contained">
            <GitHubIcon sx={{ marginRight: '10px' }} />
            {(isPending as boolean) ? 'Cargando...' : 'Iniciar sesión con Github'}
          </Button>
        </form>
        {
          error !== '' &&
          <div style={{ textAlign: 'center', width: '100%', color: 'red' }}>
            <small>{error}</small>
          </div>
        }
      </Box>
    </Box>
  )
}

export default Login
