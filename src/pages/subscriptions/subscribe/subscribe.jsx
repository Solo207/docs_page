import { Outlet, useOutlet } from 'react-router-dom'
import { route as wallet } from './wallet.jsx'

function SUBOverview() {
  const outlet = useOutlet()

  return (
    <div>
      {!outlet && (
      <>
        <h2>subscribe</h2>
        <p>Pick a subscribe from the menu.</p>
      </>  
      )}    
      <Outlet />
    </div>
  )
}

const children = [wallet]

export const route = {
  path: 'subscribe',
  label: 'Subscribe',
  element: <SUBOverview />,
  handle: { navItems: children },
  children,
}