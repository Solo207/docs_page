import { NavLink } from 'react-router-dom'

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

export default Header