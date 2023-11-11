import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import UserList from './components/UserList'
import UserListFetch from './components/UserListFetch'
import Error from './components/Error'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import { initializeUser } from './reducers/loggedUserReducer'

function App() {
  // Inicializamos el usuario al cargar la app
  const dispatch = useDispatch()
  dispatch(initializeUser())

  return (
    <Container disableGutters sx={{ height: '100vh', minWidth: '100%', display: 'grid', gridTemplateRows: 'auto 1fr' }}>
      <Navbar />
      <Container disableGutters sx={{ maxWidth: '1500', paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
        < Routes >
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/error" element={<Error />} />
          {// To remove later
          }
          <Route path="/fetch" element={<UserListFetch />} />
        </Routes >
      </Container >
    </Container >
  )
}

export default App
