

export default function Panel({title, children, theme}) {
  const className = 'panel-' + theme;
  return(
    <>
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    </>
  );
}
