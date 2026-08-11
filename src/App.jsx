import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Masthead from './components/Masthead/Masthead'
import Overview, { TAB as overviewTab } from './pages/overview/overview'
import ProductsLayout, { TAB as productsTab } from './pages/products/productsLayout'
import ProductsHome from './pages/products/productsHome'
import ProductsTopic from './pages/products/productsTopic'
import { SECTIONS } from './pages/products/productsData'
import Subscriptions, { TAB as subscriptionsTab } from './pages/subscriptions/subscriptions'
import Contribute, { TAB as contributeTab } from './pages/contribute/contribute'
import './App.css'

const TOP_TABS = [overviewTab, productsTab, subscriptionsTab, contributeTab]

function Layout() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="app">
      <Masthead navOpen={navOpen} onToggleNav={() => setNavOpen((open) => !open)} tabs={TOP_TABS} />
      <div className="app__body">
        <Outlet context={{ navOpen, setNavOpen }} />
        {navOpen && (
          <div className="app__backdrop" onClick={() => setNavOpen(false)} aria-hidden="true" />
        )}
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} />

        <Route path="products" element={<ProductsLayout />}>
          <Route index element={<ProductsHome />} />
          {SECTIONS.map((sec) => (
            <Route key={sec.slug} path={sec.slug} element={<ProductsTopic />} />
          ))}
          {SECTIONS.map((sec) => (
            <Route key={`${sec.slug}/:topic`} path={`${sec.slug}/:topic`} element={<ProductsTopic />} />
          ))}
        </Route>

        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="contribute" element={<Contribute />} />
      </Route>
    </Routes>
  )
}

export default App