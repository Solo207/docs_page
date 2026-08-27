import { useState } from 'react'
import { Outlet, useMatches, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import LeftMenu from './components/LeftMenu.jsx'
import OnPageDropdown from './components/OnPageDropdown.jsx'
import RightPanel from './components/RightPanel.jsx'
import Footer from './components/Footer.jsx'
import { ScrollToTop } from './components/AddImage.jsx'
import './Layout.css'

function Layout({ topLevel }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [onPageOpen, setOnPageOpen] = useState(false)
  const matches = useMatches()
  const location = useLocation()

  const topLevelMatch = matches[1]
  const navItems = topLevelMatch?.handle?.navItems ?? []
  const basePath = topLevelMatch?.pathname ?? ''

  // NEW: find the active top-level entry so we can show its label
  // pinned above the accordion, e.g. "Products" when under /products/*
  const activeSection = topLevel.find((t) => `/${t.path}` === basePath)

  const onPageMatch = [...matches].reverse().find((m) => m.handle?.onPageItems)
  const onPageItems = onPageMatch?.handle?.onPageItems ?? []
  const rightItems = navItems.length > 0 ? onPageItems : []

  const closeAll = () => {
    setMenuOpen(false)
    setOnPageOpen(false)
  }

  return (
    <div className="layout">
      <ScrollToTop />
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
        onLinkClick={() => setOnPageOpen(false)}
      />

      <div className="layout__body">
        <LeftMenu
          sectionLabel={navItems.length > 0 ? activeSection?.label : undefined}
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

      {(menuOpen || onPageOpen) && (
        <div className="app__backdrop" onClick={closeAll} aria-hidden="true" />
      )}
    </div>
  )
}

export default Layout