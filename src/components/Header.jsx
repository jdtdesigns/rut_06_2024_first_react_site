function Header(props) {
  const handleNavLink = (event) => {
    event.preventDefault()

    const pageName = event.target.innerText

    props.setPage(pageName)
  }

  return (
    <header className="row justify-between align-center">
      <h3>{props.title}</h3>
      <nav>
        <a className={props.page === 'Home' ? 'active' : ''} onClick={handleNavLink} href="/">Home</a>
        <a className={props.page === 'About' ? 'active' : ''} onClick={handleNavLink} href="/about">About</a>
        <a className={props.page === 'Contact' ? 'active' : ''} onClick={handleNavLink} href="/contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header