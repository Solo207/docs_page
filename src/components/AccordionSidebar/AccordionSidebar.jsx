import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './AccordionSidebar.css'

function AccordionSidebar({ sections, basePath, homeLabel = 'Overview', open, onLinkClick }) {
  const { section: currentSection } = useParams()
  const [openSections, setOpenSections] = useState(() =>
    currentSection ? new Set([currentSection]) : new Set()
  )

  useEffect(() => {
    if (currentSection) {
      setOpenSections((prev) => new Set(prev).add(currentSection))
    }
  }, [currentSection])

  const toggleSection = (slug) => {
    setOpenSections((prev) => {
      const next = new Set(prev)
      next.has(slug) ? next.delete(slug) : next.add(slug)
      return next
    })
  }

  return (
    <aside className={`accordion-sidebar ${open ? 'accordion-sidebar--open' : ''}`}>
      <p className="accordion-sidebar__label">Products</p>
      <nav aria-label="Product sections">
        <ul className="accordion-sidebar__list">
          <li>
            <NavLink to={basePath} end onClick={onLinkClick} className={({ isActive }) => (isActive ? 'active' : '')}>
              {homeLabel}
            </NavLink>
          </li>

          {sections.map((sec) => {
            const isOpen = openSections.has(sec.slug)
            const hasTopics = sec.topics && sec.topics.length > 0

            return (
              <li key={sec.slug} className="accordion-sidebar__section">
                <div
                  className={`accordion-sidebar__toggle ${isOpen ? 'open' : ''}`}
                  onClick={hasTopics ? () => toggleSection(sec.slug) : undefined}
                  role="button"
                  tabIndex={hasTopics ? 0 : -1}
                  aria-expanded={hasTopics ? isOpen : undefined}
                >
                  {hasTopics ? (
                    <span className="accordion-sidebar__section-label">{sec.label}</span>
                  ) : (
                    <NavLink
                      to={`${basePath}/${sec.slug}`}
                      onClick={onLinkClick}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                      {sec.label}
                    </NavLink>
                  )}
                  {hasTopics && <span className="accordion-sidebar__arrow" aria-hidden="true" />}
                </div>

                {hasTopics && isOpen && (
                  <ul className="accordion-sidebar__children">
                    {sec.topics.map((topic) => (
                      <li key={topic.slug}>
                        <NavLink
                          to={`${basePath}/${sec.slug}/${topic.slug}`}
                          onClick={onLinkClick}
                          className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                          {topic.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default AccordionSidebar