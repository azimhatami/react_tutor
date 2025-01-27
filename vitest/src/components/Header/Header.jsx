function Header({ title }) {
  return(
    <>
      <h1 title='header'>{title}</h1>
      <h2 data-testid='header-2'>Text</h2>
    </>
  );
}


export default Header;
