function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {year} <span className="footer__brand">Study Buddy Documentation</span>. All rights reserved.</p>
    </footer>
  )
}

export default Footer