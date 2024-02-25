import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer.tsx";
import Navbar from "./components/navbar.tsx";
import Home from "./pages/home.tsx";
import Contact from "./pages/contact.tsx";
import Projects from "./pages/projects.tsx";
import Experience from "./pages/experience.tsx";
import About from "./pages/about.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
