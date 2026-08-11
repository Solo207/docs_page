// pages/contribute/contribute.jsx
import { useOutletContext } from 'react-router-dom'
import EmptySidebar from '../../components/EmptySidebar/EmptySidebar'

function Contribute() {
  const { navOpen } = useOutletContext()

  return (
    <>
      <EmptySidebar open={navOpen} label="Contribute" />
      <main className="content">
        <section className="section">
          <h2>Contribute page — dummy text</h2>
          <p>If you can read this at the URL /contribute, routing is working.</p>
        </section>
      </main>
    </>
  )
}

export const TAB = { label: 'Contribute', path: '/contribute', children: [] }
export default Contribute