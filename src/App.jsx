import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Archive from "./pages/archive/Archive";
import Information from "./pages/information/Information";
import SampleProject from "./pages/sampleproject/SampleProject";
import PhysisMassage from "./pages/physis-massage/PhysisMassage";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  const pageTitles = {
    "/": "Home | Stergios Pappos | Web Designer & Developer",
    "/projects": "Projects | Stergios Pappos | Web Designer & Developer",
    "/archive": "Archive | Stergios Pappos | Web Designer & Developer",
    "/information": "Information | Stergios Pappos | Web Designer & Developer",
    "/sample-project":
      "Sample Project | Stergios Pappos | Web Designer & Developer",
    "/physis-massage":
      "Physis Massage | Stergios Pappos | Web Designer & Developer",
  };

  useEffect(() => {
    const currentTitle = pageTitles[location.pathname] || "Stergios Pappos";
    document.title = currentTitle;

    if (location.pathname !== "/archive") {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 700);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/information" element={<Information />} />
          <Route path="/projects/sample-project" element={<SampleProject />} />
          <Route path="/projects/physis-massage" element={<PhysisMassage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
