import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Ágnes weboldala</h1>
                <div className="links">
                    <Link to="/">Hírdetések</Link>
                    <Link to="/rolam">Rólam</Link>
                </div>
        </nav>
     );
}
 
export default Navbar;