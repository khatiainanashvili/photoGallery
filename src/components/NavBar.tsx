import { Link } from "react-router-dom"
import { HistoryIcon, MainIcon } from "../assets/icons"



function NavBar() {
  return (
    <nav>
        <ul className="navigation-list">
            <li>
                <Link to={"/"}><MainIcon /> Main</Link>
            </li>
            <li>
            <Link to={"/history"}><HistoryIcon/>History</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar