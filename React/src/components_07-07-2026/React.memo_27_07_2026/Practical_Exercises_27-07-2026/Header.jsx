function Header() {
  console.log("Header Rendered");

  return (
    <div className="bg-blue-600 text-white text-3xl font-bold p-5 text-center">
      React.memo API Demo
    </div>
  );
}

export default Header;