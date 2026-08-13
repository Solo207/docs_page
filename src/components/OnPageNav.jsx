import { useState, useEffect } from 'react'

function OnPageNav({ items, onLinkClick }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? null)

  useEffect(() => {
    if (items.length === 0) return

    // Reset immediately when the page changes, so it doesn't
    // keep showing whatever was active on the PREVIOUS page
    setActiveId(items[0].id)

    const headings = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 }
    )

    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
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