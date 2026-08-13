/*import { NavLink } from 'react-router-dom'

function Header({ topLevel, open, onToggle, hasLeftContent }) {
  return (
    <header className="header">
      <span className="header__brand">Study Buddy Documentation</span>
      <nav className="header__tabs">
        {topLevel.map((item) => (
          <NavLink key={item.label} to={item.path ? `/${item.path}` : '/'} end={!item.path}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      {hasLeftContent && (
        <button className="header__toggle" onClick={onToggle} aria-expanded={open}>☰</button>
      )}
    </header>
  )
}

export default Header*/

import { NavLink, Link } from 'react-router-dom'

function Header({ topLevel, open, onToggle, hasLeftContent }) {
  return (
    <header className="header">
      <div className="header__row">
        {hasLeftContent && (
          <button className="header__toggle" onClick={onToggle} aria-expanded={open}>☰</button>
        )}
        <Link to="/" className="header__brand">
          <span className="header__logo-wrap">
            <img
              src="/IMG-20260625-WA003.png"
              alt="Study Buddy logo"
              className="header__logo"
            />
          </span>
          <span className="header__brand-text">Docs</span>
        </Link>
        <nav className="header__tabs">
          {topLevel.map((item) => (
            <NavLink key={item.label} to={item.path ? `/${item.path}` : '/'} end={!item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header