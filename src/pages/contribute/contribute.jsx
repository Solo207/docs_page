import { Outlet, useOutlet } from 'react-router-dom'
import { route as supRoute } from './support/support.jsx'

function Contribute() {
  const outlet = useOutlet()

  return (
    <div>
      {!outlet && (
      <>
        <h1>Contribute</h1>
        <p>Pick a contribute from the menu.</p>
      </>
      )}
      <Outlet />
    </div>
  )
}

const children = [supRoute] 

export const route = {
  path: 'contribute',
  label: 'Contribute',
  element: <Contribute />,
  handle: { navItems: children }, 
  children,
}