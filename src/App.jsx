import { Routes, Route, NavLink, Outlet } from 'react-router-dom'
import './App.css'
import Overview from './pages/overview/overview'
import Products from './pages/products/products'
import Subscriptions from './pages/subscriptions/subscriptions'
import Contribute from './pages/contribute/contribute'
import { useState } from 'react'


const TOP_TABS = [
  { label: 'Overview', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Subscriptions', path: '/subscriptions' },
  { label: 'Contribute', path: '/contribute' },
]

function Layout() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="app">
      <header className="masthead">
        <div className="masthead__row">
          <span className="masthead__brand">
            <span className="mark" aria-hidden="true" />
            Study Buddy Documentation
          </span>
          <button
            className="masthead__toggle"
            aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="masthead__tabs" aria-label="Product areas">
          {TOP_TABS.map((tab) => (
            <NavLink
              key={tab.label}
              to={tab.path}
              end={tab.path === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <div className="app__body">
        <Outlet context={{ navOpen, setNavOpen }} />
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="products" element={<Products />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="contribute" element={<Contribute />} />
      </Route>
    </Routes>
  )
}

export default App