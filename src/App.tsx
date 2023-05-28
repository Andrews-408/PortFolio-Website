import React from 'react';
import {ThemeProvider} from "styled-components"
import { themes } from './Components/Constants/Theme';
import Home from './Components/Home/Home';
import { MainContainer } from './Components/Constants/SharedStyles';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
    <ThemeProvider theme={themes}>
        <MainContainer>
            <Home />
            <Navbar />
            <About />
        </MainContainer>
          
        
    </ThemeProvider>
    
  );
}

export default App;
