import './PageHeader.css'

function PageHeader({ eyebrow, title, lede, level = 2, hero = false }) {
  const Heading = level === 1 ? 'h1' : 'h2'

  return (
    <div className={`page-header ${hero ? 'page-header--hero' : ''}`}>
      {eyebrow && <p className="page-header__eyebrow">{eyebrow}</p>}
      <Heading>{title}</Heading>
      {lede && <p className="page-header__lede">{lede}</p>}
    </div>
  )
}

export default PageHeader