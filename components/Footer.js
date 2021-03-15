const Footer = () => {
  const getYear = () => {
    let d = new Date()
    return d.getFullYear()
  }
    return (
      <footer>
        Copyright &copy; {getYear()}, All Rights Reserved
      </footer>
    )
  }

export default Footer;
