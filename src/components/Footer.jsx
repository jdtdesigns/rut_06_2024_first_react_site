const footerStyles = {
  backgroundColor: '#ccc',
  padding: '50px',
  color: '#555'
}

function Footer() {
  return (
    <footer style={footerStyles} className="main-footer row justify-between align-center">
      <p>Copyright 2024</p>
      <p>Created By Rutgers Class</p>
    </footer>
  )
}

export default Footer