import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home" data-testid="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about" data-testid="about">
      <h2>About</h2>
      <p>This is the About component.</p>
    </div>
  );
}


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
