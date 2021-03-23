import { Link } from 'react-router-dom';
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Eddie Cheng</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <a href="https://chengr4.medium.com/">Medium</a>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;