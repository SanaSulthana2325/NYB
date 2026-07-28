function Header() {
  return <h1>Shopping App</h1>;
}

function ProductList() {
  return <p>Products</p>;
}

function Footer() {
  return <h3>Copyright 2026</h3>;
}

function Headings() {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}

export default Headings;