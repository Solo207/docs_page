/*function Wallet() {
  return <p>wallet to the devs</p>
}

export const route = {
  path: 'wallet',
  label: 'wallet to the devs',
  element: <Wallet />,
}   */

import { Outlet, useOutlet } from 'react-router-dom'

function Wallet() {
  const outlet = useOutlet()

  return (
    <div>
      {!outlet && (
      <>
        <h2>subscribe</h2>
        <p>wallet to the devs</p>
      </>  
      )}    
      <Outlet />
    </div>
  )
}
//wallet
const children = []

export const route = {
  path: 'wallet',
  label: 'Wallet',
  element: <Wallet />,
  handle: { navItems: children },
  children,
}