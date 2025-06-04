import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
