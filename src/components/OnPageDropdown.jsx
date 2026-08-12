import OnPageNav from './OnPageNav.jsx'

function OnPageDropdown({ items, open, onToggle, onLinkClick }) {
  if (items.length === 0) return null

  return (
    <div className="onpage-float">
      <button
        type="button"
        className="onpage-float__toggle"
        onClick={onToggle}
        aria-expanded={open}
        aria-label="On this page"
      >
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="2" cy="4" r="1.3" fill="currentColor" />
          <rect x="6" y="3.2" width="10" height="1.6" rx="0.8" fill="currentColor" />
          <circle cx="2" cy="9" r="1.3" fill="currentColor" />
          <rect x="6" y="8.2" width="10" height="1.6" rx="0.8" fill="currentColor" />
          <circle cx="2" cy="14" r="1.3" fill="currentColor" />
          <rect x="6" y="13.2" width="10" height="1.6" rx="0.8" fill="currentColor" />
        </svg>
      </button>

      <div className={`onpage-float__panel ${open ? 'onpage-float__panel--open' : ''}`}>
        <OnPageNav items={items} onLinkClick={onLinkClick} />
      </div>
    </div>
  )
}

export default OnPageDropdown



