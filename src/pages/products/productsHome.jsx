import PageHeader from '../../components/PageHeader/PageHeader'

function ProductsHome() {
  return (
    <section className="section">
      <PageHeader
        level={1}
        eyebrow="Products"
        title="Products — dummy text"
        lede="Pick a feature from the sidebar to see how it works: Q&A, Quiz, Flashcards, Past Questions, or Video Summaries."
      />
    </section>
  )
}

export default ProductsHome