import { Outlet, useOutlet } from 'react-router-dom'
import { route as subRoute } from './subscribe/subscribe.jsx'

function Subscriptions() {
  const outlet = useOutlet()

  return (
    <div>
      {!outlet && (
      <>
        <h1>Contribute</h1>
        <p>Pick a sub from the menu.</p>
      </>
      )}
      <Outlet />
    </div>
  )
}

const children = [subRoute] 

export const route = {
  path: 'subscriptions',
  label: 'Subscriptions',
  element: <Subscriptions />,
  handle: { navItems: children }, 
  children,
}