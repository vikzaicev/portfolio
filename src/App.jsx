import { Footer } from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Contacts from "./Pages/Contacts/Contacts";
import Home from "./Pages/Home/Home";
import { Projects } from "./Pages/Projects/Projects";
import ProjectShow from "./Pages/ProjectShow/ProjectShow";

function App() {
  return (
    <div className="app">
      <Nav />
      {/* <Home /> */}
      {/* <Contacts /> */}
      {/* <Projects /> */}
      <ProjectShow />
      <Footer />
    </div>
  );
}

export default App;
