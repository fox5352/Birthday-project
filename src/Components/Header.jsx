import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h2 className="header-title">Happy birthday 🥳🎂</h2>
      </Link>
      <Link className="header-link" to='/login'>Login</Link>
    </header>
  )
}