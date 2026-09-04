import { Outlet, useOutlet } from 'react-router-dom'
import { route as book } from './bookmark.jsx'
import { route as searchpq } from './searchpq.jsx'
import { route as navpq } from './navigatepq.jsx'
import { route as navbm } from './navigatebm.jsx'


function PQOverview() { 
  const outlet = useOutlet()

  return (
    <div>
      {!outlet && (
        <>
          <h2>Q&A</h2>
          <p>Pick a topic from the menu.</p>
        </>
      )}
      <Outlet /> 
    </div>
  )
}

const children = [searchpq,navpq,book, navbm]

export const route = {
  path: 'past-question',
  label: 'Past question and Bookmark',
  element: <PQOverview />,
  handle: { navItems: children },
  children,
}