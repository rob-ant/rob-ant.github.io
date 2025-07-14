function App() {
  return (
    <div>
      <header>
        <h1>Rob Anthony</h1>
        <p>Engineer • Maker • Tinkerer</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>I’m an engineer with a passion for building both hardware and software. I’m currently working in...</p>
      </section>

      <section>
        <h2>Projects</h2>
        <p>Coming soon!</p>
      </section>

      <section>
        <h2>CV / Contact</h2>
        <p>You can reach me at <a href="mailto:ra215223217@gmail.com">ra215223217@gmail.com</a></p>
        <a href="/cv.pdf" download>Download My CV</a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Rob Anthony</p>
      </footer>
    </div>
  );
}

export default App;
