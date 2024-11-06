

export default function Button({children, theme}) {
  const className = 'button-' + theme;
  return(
    <>
      <button className={className}>{children}</button>
    </>
  );
}
