import {Outlet, Link} from "react-router-dom"

function Navigation() {
  return (
    <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
        <Outlet />
    </>
  )
}

export default Navigation