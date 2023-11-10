import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import UserList from './components/UserList'
import UserListFetch from './components/UserListFetch'
import Error from './components/Error'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="application">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/error" element={<Error />} />
        {// To remove later
        }
        <Route path="/fetch" element={<UserListFetch />} />
      </Routes>
    </div>
  )
}

export default App
