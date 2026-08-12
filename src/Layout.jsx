import { useState } from 'react'
import { Outlet, useMatches, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import LeftMenu from './components/LeftMenu.jsx'
import OnPageDropdown from './components/OnPageDropdown.jsx'
import RightPanel from './components/RightPanel.jsx'
import Footer from './components/Footer.jsx'
import './Layout.css'

function Layout({ topLevel }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [onPageOpen, setOnPageOpen] = useState(false)
  const matches = useMatches()
  const location = useLocation()

  const topLevelMatch = matches[1]
  const navItems = topLevelMatch?.handle?.navItems ?? []
  const basePath = topLevelMatch?.pathname ?? ''

  const onPageMatch = [...matches].reverse().find((m) => m.handle?.onPageItems)
  const onPageItems = onPageMatch?.handle?.onPageItems ?? []

  // Same "overflow only" rule for both desktop RightPanel and mobile OnPageDropdown
  const rightItems = navItems.length > 0 ? onPageItems : []

  return (
    <div className="layout">
      <Header
        topLevel={topLevel}
        open={menuOpen}
        onToggle={() => setMenuOpen((v) => !v)}
        hasLeftContent={navItems.length > 0 || onPageItems.length > 0}
      />

      <OnPageDropdown
        items={rightItems}
        open={onPageOpen}
        onToggle={() => setOnPageOpen((v) => !v)}
      />

      <div className="layout__body">
        <LeftMenu
          navItems={navItems}
          onPageItems={onPageItems}
          basePath={basePath}
          currentPath={location.pathname}
          open={menuOpen}
          onLinkClick={() => setMenuOpen(false)}
        />
        <main className="layout__content">
          <Outlet />
        </main>
        <RightPanel items={rightItems} />
      </div>

      <Footer />

      {menuOpen && (
        <div className="app__backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </div>
  )
}

export default Layout