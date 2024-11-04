const Footer = () => {
  const today = new Date().getFullYear();

  return (
    <footer>
      <p> &copy; Copyright {today}</p>
    </footer>
  );
};

export default Footer;
