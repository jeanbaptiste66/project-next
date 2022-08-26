
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="Header">
            <h1>Blog formation Next</h1>
            <nav>
                <ul>
                    <li><Link to="/">Blog</Link></li><hr/>
                    <li><Link to="post">Création article</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header