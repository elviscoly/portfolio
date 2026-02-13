import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="brand">Elvis Iria — Software Developer</div>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Index</NavLink>
        <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Profile</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Contact</NavLink>
      </nav>
    </header>
  );
}
