import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import UserList from './components/UserList'
import UserService from './components/UserService'

function App() {

  return (
    <div className="application">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        // To remove later
        <Route path="/fetch" element={<UserService />} />
      </Routes>
    </div>
  )
}

export default App
