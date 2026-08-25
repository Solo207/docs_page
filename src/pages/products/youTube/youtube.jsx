 import { Outlet, useOutlet } from 'react-router-dom'
import { route as summary } from './summary.jsx'

function YTOverview() { 
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

const children = [summary]

export const route = {
  path: 'youtube',
  label: 'youtube',
  element: <YTOverview />,
  handle: { navItems: children },
  children,
}