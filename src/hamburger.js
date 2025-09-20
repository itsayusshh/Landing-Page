function Hamburger() {
  const hamburgerlines = [1, 2, 3];

  return (
    <>
      <div className="Containerhamburger">
        {hamburgerlines.map(() => {
          return <div className="list"></div>;
        })}
      </div>
    </>
  );
}

export default Hamburger;
