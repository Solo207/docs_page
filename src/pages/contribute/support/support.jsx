import { Outlet, useOutlet } from 'react-router-dom'
import { route as donate } from './donate.jsx'

function SUPOverview() {
  const outlet = useOutlet()

  return (
    <div>
      {!outlet && (
      <>
        <h2>SUPPORT</h2>
        <p>Pick a donate from the menu.</p>
      </>  
      )}    
      <Outlet />
    </div>
  )
}

const children = [donate]

export const route = {
  path: 'support',
  label: 'Support',
  element: <SUPOverview />,
  handle: { navItems: children },
  children,
}