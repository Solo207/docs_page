import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import OnPageNav from './OnPageNav.jsx'


function MenuItem({ item, parentPath, currentPath, onLinkClick }) {
  const fullPath = `${parentPath}/${item.path}`
  const hasChildren = item.children && item.children.length > 0
  const isActiveBranch = currentPath.startsWith(fullPath)

  const [open, setOpen] = useState(isActiveBranch)

  useEffect(() => {
    if (isActiveBranch) setOpen(true)
  }, [currentPath])

  if (!hasChildren) {
  return (
    <li>
      <NavLink to={fullPath} end onClick={onLinkClick}>
        {item.label}
      </NavLink>
    </li>
  )
  }

  return (
  <li>
    <div className={`left-menu__toggle ${open ? 'open' : ''}`}>
      <NavLink to={fullPath} end onClick={onLinkClick} className="left-menu__label">
        {item.label}
      </NavLink>
      <button
        type="button"
        className="left-menu__arrow-btn"
        aria-expanded={open}
        aria-label={`Toggle ${item.label} submenu`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="left-menu__arrow" aria-hidden="true" />
      </button>
    </div>

    {open && (
      <ul className="left-menu__children">
        {item.children.map((child) => (
          <MenuItem
            key={child.path}
            item={child}
            parentPath={fullPath}
            currentPath={currentPath}
            onLinkClick={onLinkClick}
          />
        ))}
      </ul>
    )}
  </li>
)
}

function LeftMenu({ sectionLabel, basePath, navItems, onPageItems, currentPath, open, onLinkClick }) {
  if (navItems.length > 0) {
    return (
      <aside className={`left-menu ${open ? 'left-menu--open' : ''}`}>
        {sectionLabel && (
          <NavLink to={basePath} end className="left-menu__section-label" onClick={onLinkClick}>
            {sectionLabel}
          </NavLink>
        )}
        <ul>
          {navItems.map((item) => (
            <MenuItem
              key={item.path}
              item={item}
              parentPath={basePath}
              currentPath={currentPath}
              onLinkClick={onLinkClick}
            />
          ))}
        </ul>
      </aside>
    )
  }

  if (onPageItems.length > 0) {
    return (
      <aside className={`left-menu left-menu--onpage ${open ? 'left-menu--open' : ''}`}>
        <OnPageNav items={onPageItems} onLinkClick={onLinkClick} />
      </aside>
    )
  }

  return null
}

export default LeftMenu