// pages/subscriptions/subscriptions.jsx
import { useOutletContext } from 'react-router-dom'
import EmptySidebar from '../../components/EmptySidebar/EmptySidebar'

function Subscriptions() {
  const { navOpen } = useOutletContext()

  return (
    <>
      <EmptySidebar open={navOpen} label="Subscriptions" />
      <main className="content">
        <section className="section">
          <h2>Subscriptions page — dummy text</h2>
          <p>If you can read this at the URL /subscriptions, routing is working.</p>
        </section>
      </main>
    </>
  )
}

export const TAB = { label: 'Subscriptions', path: '/subscriptions', children: [] }
export default Subscriptions