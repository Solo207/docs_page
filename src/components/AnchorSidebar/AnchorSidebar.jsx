import './AnchorSidebar.css'

function AnchorSidebar({ items, activeId, open, onLinkClick, children }) {
  return (
    <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
      <nav className="sidebar__nav" aria-label="Sections">
        <p className="sidebar__nav-label">On this page</p>
        <ul>
          {items.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeId === id ? 'active' : ''}
                onClick={onLinkClick}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {children && <div className="sidebar__meta">{children}</div>}
    </aside>
  )
}

export default AnchorSidebar