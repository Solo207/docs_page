import { Outlet, useOutlet } from 'react-router-dom'
import { route as qaRoute } from './qa/qa.jsx'
import {route as ytRoute } from './youTube/youtube.jsx'
import {route as pqRoute} from './pastQuestion/pq.jsx'

function ProductsOverview() { 
  const outlet = useOutlet()

  return ( 
    <div>
      {!outlet && (
        <>
          <h1>Products</h1>
          <p>Pick a feature from the menu.</p>
        </>
      )}
      <Outlet />
    </div>
  )
}

const children = [qaRoute, ytRoute, pqRoute]

export const route = {
  path: 'products',
  label: 'Products',
  element: <ProductsOverview />,
  handle: { navItems: children },
  children,
}