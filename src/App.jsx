import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Archive from "./pages/archive/Archive";
import Information from "./pages/information/Information";
import ProjectPage from "./pages/singleProject/ProjectPage";

function App() {
  const location = useLocation();

  const pageTitles = {
    "/": "Home | Stergios Pappos | Web Designer & Developer",
    "/projects": "Projects | Stergios Pappos | Web Designer & Developer",
    "/archive": "Archive | Stergios Pappos | Web Designer & Developer",
    "/information": "Information | Stergios Pappos | Web Designer & Developer",
  };

  useEffect(() => {
    const currentTitle = pageTitles[location.pathname] || "Stergios Pappos";
    document.title = currentTitle;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Check if the current route is a single project page
  const isSingleProjectPage =
    location.pathname.startsWith("/projects/") &&
    location.pathname !== "/projects";

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/information" element={<Information />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>
      {!isSingleProjectPage && <Footer />}
    </>
  );
}

export default App;
