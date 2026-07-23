import Navbar from "./Navbar";
import Footer from "./Footer";

function AuthLayout({ isLoggedIn, children }) {

  if (!isLoggedIn) {
    return <h2>Please Login First</h2>;
  }

  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}

export default AuthLayout;