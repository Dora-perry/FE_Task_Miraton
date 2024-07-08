import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4">My Dashboard</div>
      <ul>
        <li>
          <Link to="/" className="block p-4 hover:bg-gray-700">Dashboard</Link>
        </li>
        <li>
          <Link to="/add-contact" className="block p-4 hover:bg-gray-700">Add Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
