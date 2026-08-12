import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { route as overviewRoute } from './pages/overview/overview.jsx'
import { route as productsRoute } from './pages/products/products.jsx'
import { route as subscriptionsRoute } from './pages/subscriptions/subscriptions.jsx'
import { route as contributeRoute } from './pages/contribute/contribute.jsx'

const topLevel = [overviewRoute, productsRoute, subscriptionsRoute, contributeRoute]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout topLevel={topLevel} />,
    children: [
      { index: true, element: overviewRoute.element, handle: overviewRoute.handle },
      productsRoute,
      subscriptionsRoute,
      contributeRoute,
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App