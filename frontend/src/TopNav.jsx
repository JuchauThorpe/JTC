import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const NAV_ITEMS = [
  { label: 'Who We Are',   path: '/who-we-are' },
  { label: 'Services',     path: '/services' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact Us',   path: '/contact-us' },
];

export default function TopNav() {
  return (
    <header className="top-nav">
      <Logo />
      <nav className="top-menu">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              'top-menu-item' + (isActive ? ' top-menu-item--active' : '')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
