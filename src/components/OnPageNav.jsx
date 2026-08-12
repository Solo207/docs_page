import { useState, useEffect } from 'react'

function OnPageNav({ items, onLinkClick }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? null)

  useEffect(() => {
    // ...unchanged IntersectionObserver logic
  }, [items])

  if (items.length === 0) return null

  return (
    <nav className="on-page-nav" aria-label="On this page">
      <ul>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={activeId === id ? 'active' : ''} onClick={onLinkClick}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default OnPageNav