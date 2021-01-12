import { ThemeProvider } from "@material-ui/core";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full h-full bg-gray-100">
        <Header />
        <div className="p-0 lg:pt-20">
          <Intro />
          <Skills />
          <Projects />
          <Details />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
