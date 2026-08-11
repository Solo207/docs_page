// components/EmptySidebar/EmptySidebar.jsx
import '../AccordionSidebar/AccordionSidebar.css'

function EmptySidebar({ open, label }) {
  return (
    <aside className={`accordion-sidebar ${open ? 'accordion-sidebar--open' : ''}`}>
      <p className="accordion-sidebar__label">{label}</p>
      <p className="accordion-sidebar__empty">Nothing here yet.</p>
    </aside>
  )
}

export default EmptySidebar