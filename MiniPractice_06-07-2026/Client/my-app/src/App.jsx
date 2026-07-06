function App() {
  return (
    <div>
      {/* Heading */}
      <h1>Welcome to My App</h1>

      {/* Personal Information */}
      <h2>Personal Information</h2>

      <p>Name: Sana Sulthana</p>
      <p>Course: React Development</p>
      <p>Location: warangal</p>

      {/* Multiple JSX Elements */}
      <h2>My Skills</h2>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>

      {/* Favorite Things */}
      <h2>Favorite Technologies</h2>

      <div>
        <p>✔ React JS</p>
        <p>✔ CSS Grid</p>
        <p>✔ Flexbox</p>
      </div>
    </div>
  );
}

export default App;