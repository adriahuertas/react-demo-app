import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Navbar() {
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
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/users" style={{ textDecoration: 'none', color: 'white' }}>
              Users
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
