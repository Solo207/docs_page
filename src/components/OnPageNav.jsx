import { useState, useEffect } from 'react'

function OnPageNav({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? null)

  useEffect(() => {
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav className="on-page-nav" aria-label="On this page">
      <ul>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={activeId === id ? 'active' : ''}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default OnPageNav