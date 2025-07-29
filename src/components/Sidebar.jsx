import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Crewmates</h2>
      <nav>
        <ul>
          <li><Link to="/">Summary</Link></li>
          <li><Link to="/create">Create</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
