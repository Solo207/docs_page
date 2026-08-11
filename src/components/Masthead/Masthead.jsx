import { NavLink } from 'react-router-dom'
import './Masthead.css'

function Masthead({ navOpen, onToggleNav, tabs }) {
  return (
    <header className="masthead">
      <div className="masthead__row">
        <span className="masthead__brand">
          <span className="mark" aria-hidden="true" />
          Study Buddy Documentation
        </span>
        <button
          className="masthead__toggle"
          aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={navOpen}
          onClick={onToggleNav}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className="masthead__tabs" aria-label="Product areas">
        {tabs.map((tab) => (
          <NavLink
            key={tab.label}
            to={tab.path}
            end={tab.path === '/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Masthead