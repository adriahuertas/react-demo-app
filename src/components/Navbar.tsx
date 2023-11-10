import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = false
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {user && <Link to="/users">Users</Link>}
          {!user && <Link to="/login">Login</Link>}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
