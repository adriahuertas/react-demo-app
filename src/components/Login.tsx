import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const handleSubmit = () => {
    console.log(email)
    console.log(password)
  }

  return (
    <div>
      Login Component
      <TextField
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="user@example.com"
        id="outlined-start-adornment"
        sx={{ m: 1, width: '25ch' }}
        InputProps={{
          startAdornment:
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>,
        }}
      />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          onChange={(e) => setPassword(e.target.value)}
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
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
      <Button onClick={handleSubmit} disabled={email.length === 0 || password.length === 0} variant="contained">Sign In</Button>
    </div>
  )
}

export default Login
