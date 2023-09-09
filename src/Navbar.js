import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Brainy's Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">Contacts</Link>
                <Link to="/create">New Blogs</Link>
            </div>
        </div>
    );
}
 
export default Navbar;