import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { initializeUser, selectUserToken } from './reducers/loggedUserReducer'
import { useEffect } from 'react'
import UserListFetch from './components/UserListFetch'

function App() {
  // Inicializamos el usuario al cargar la app
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeUser())
  }, [dispatch])

  const token = useSelector(selectUserToken)

  const isLogged = token !== ''

  return (
    <Container disableGutters sx={{ height: '100vh', minWidth: '100%', display: 'grid', gridTemplateRows: 'auto 1fr' }}>
      <Navbar />
      <Container disableGutters sx={{ maxWidth: '1300', paddingTop: '100px', display: 'flex', justifyContent: 'center' }}>
        < Routes >
          <Route path="/" element={isLogged ? <UserListFetch /> : <Login />} />
          <Route path="/login" element={isLogged ? <UserListFetch /> : <Login />} />
          <Route path="/users" element={isLogged ? <UserListFetch /> : <Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes >
      </Container >
    </Container >
  )
}

export default App
