import { BrowserRouter, Routes, Route } from "react-router";

import ScrollToTop from "./Utils/ScrollToTop";

import { Footer } from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Contacts from "./Pages/Contacts/Contacts";
import Home from "./Pages/Home/Home";
import { Projects } from "./Pages/Projects/Projects";
import ProjectShow from "./Pages/ProjectShow/ProjectShow";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Project/:id" element={<ProjectShow />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
