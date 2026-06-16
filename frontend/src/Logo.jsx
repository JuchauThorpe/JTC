import { Link } from 'react-router-dom';
import logoImg from './assets/logo.jpg';

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logoImg} alt="Juchau-Thorpe Consulting" className="logo-img" />
    </Link>
  );
}
