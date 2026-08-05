import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/logout");
  };


  return (
    <div style={{ padding: "20px" }}>
      {/* Top buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 20px",
            marginRight: "10px",
            border: "none",
            borderRadius: "6px"
          }}
        >
          Back
        </button>

        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "orange",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px"
          }}
        >
          Forward
        </button>
      </div>

      {/* Main content */}
      <h1>Home Page</h1>
      <p>This is the main content of the Home page.</p>
    </div>
  );
}

export default HomePage;