import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#a78bfa" />
            <stop offset="50%"  stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
        {/* Left wing */}
        <path
          d="M16 22 C10 18, 2 16, 4 9 C6 14, 11 15, 16 16Z"
          fill="url(#logoGrad)"
          opacity="0.9"
        />
        {/* Right wing */}
        <path
          d="M16 22 C22 18, 30 16, 28 9 C26 14, 21 15, 16 16Z"
          fill="url(#logoGrad)"
          opacity="0.9"
        />
        {/* Body */}
        <ellipse cx="16" cy="20" rx="3" ry="5" fill="url(#logoGrad)" />
      </svg>

      <span className="logo-text">JTC</span>
    </Link>
  );
}
