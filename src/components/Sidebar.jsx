import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Crewmates</h2>
      <nav>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/summary">Crewmate Gallery</Link></li>
            <li><Link to="/create">Create a New Crewmate</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
