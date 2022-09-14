import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import {lightTheme, darkTheme} from './components/Themes'
import { Route, Switch, useLocation } from "react-router-dom"

//Componentes
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkills from './components/MySkills';
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

function App() {

  const location = useLocation();

  return <>
  
  
  <GlobalStyle/>
    
    <ThemeProvider theme={lightTheme}>
  
    <SoundBar />

  <AnimatePresence exitBeforeEnter>
  <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/blog" component={BlogPage}/>
      <Route exact path="/work" component={WorkPage}/>
      <Route exact path="/skills" component={MySkills}/>
    </Switch>
  </AnimatePresence> 


    </ThemeProvider>
    
    
    
    </>

}

export default App

