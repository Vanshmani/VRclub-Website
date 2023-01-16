import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes"; 
import Navigation from "./components/Navigation"; 
import Home from "./components/sections/Home"; 
import About from "./components/sections/About";  
import Roadmap from "./components/sections/Roadmap";  
import Showcase from "./components/sections/Showcase";  

function App() {
  return (
    <div> 
    <GlobalStyles/> 
    {/* contains universal styling for different components used troughout the project */}
      <ThemeProvider theme={light}>
        {/* <Navigation/>  */}
        <Home/> 
        <About/>
        <Roadmap/>
        <Showcase/>
        {/* <Team/>
        <Faq/> 
        <Footer/>         */}
      </ThemeProvider>
    </div>
  );
}

export default App;
