import { useState, useEffect, useRef } from 'react'

function OnPageNav({ items, onLinkClick }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? null)
  const clickedIdRef = useRef(null)

  useEffect(() => {
    if (items.length === 0) return

    // Respect an existing hash on load (e.g. landing on #courses directly)
    const hashId = window.location.hash.slice(1)
    setActiveId(items.some((i) => i.id === hashId) ? hashId : items[0].id)

    const headings = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickedIdRef.current) return // a click just happened, don't fight it

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

  const handleClick = (id) => {
    setActiveId(id)
    clickedIdRef.current = id
    window.setTimeout(() => {
      clickedIdRef.current = null
    }, 700) // long enough for the jump/smooth-scroll to finish
    onLinkClick?.()
  }

  if (items.length === 0) return null

  return (
    <nav className="on-page-nav" aria-label="On this page">
      <ul>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeId === id ? 'active' : ''}
              onClick={() => handleClick(id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default OnPageNav