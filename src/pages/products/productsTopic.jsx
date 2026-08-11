import { useParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader'
import { SECTIONS } from './productsData'

function ProductsTopic() {
  const { section: sectionSlug, topic: topicSlug } = useParams()
  const section = SECTIONS.find((s) => s.slug === sectionSlug)

  if (!section) {
    return (
      <section className="section">
        <PageHeader level={1} title="Not found" lede="That product section doesn't exist." />
      </section>
    )
  }

  const content = topicSlug ? section.topics.find((t) => t.slug === topicSlug) : section.overview

  if (!content) {
    return (
      <section className="section">
        <PageHeader level={1} title="Not found" lede={`That topic doesn't exist under ${section.label}.`} />
      </section>
    )
  }

  return (
    <section className="section">
      <PageHeader level={1} eyebrow={section.label} title={content.title} lede={content.body} />
    </section>
  )
}

export default ProductsTopic