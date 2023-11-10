import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import UserList from './components/UserList'
import UserListFetch from './components/UserListFetch'
import Error from './components/Error'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'

function App() {
  return (
    <>
      <Navbar />
      <Container disableGutters sx={{ height: '100vh', maxWidht: '1200px', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
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
    </>
  )
}

export default App
