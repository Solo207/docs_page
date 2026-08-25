// AddImage.jsx
import { NavLink } from 'react-router-dom'
import './../Layout.css'

function AddImage({ src, alt = '', caption, height = 320 }) {
  return (
    <figure className="add-image">
      <div className="add-image__frame" style={{ height }}>
        <img src={src} alt={alt} className="add-image__img" />
      </div>
      {caption && <figcaption className="add-image__caption">{caption}</figcaption>}
    </figure>
  )
}

export function PageNav({ previous, next }) {
  return (
    <nav className="page-nav" aria-label="Page navigation">
      {previous && (
        <NavLink to={previous.to} className="page-nav__card page-nav__card--prev">
          <span className="page-nav__arrow" aria-hidden="true">‹</span>
          <span className="page-nav__text">
            <span className="page-nav__eyebrow">Previous</span>
            <span className="page-nav__label">{previous.label}</span>
          </span>
        </NavLink>
      )}
      {next && (
        <NavLink to={next.to} className="page-nav__card page-nav__card--next">
          <span className="page-nav__text">
            <span className="page-nav__eyebrow">Next</span>
            <span className="page-nav__label">{next.label}</span>
          </span>
          <span className="page-nav__arrow" aria-hidden="true">›</span>
        </NavLink>
      )}
    </nav>
  )
}

export default AddImage