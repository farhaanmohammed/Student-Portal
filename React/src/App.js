import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import View from './components/View';
import Addform from './components/AddStudentForm';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import Footer from './components/Footer';

const styles = {
  fontFamily: 'Onest, sans-serif',
  color:'white',
  letterSpacing: '0.2em',
  
};



function App() {
  const [reloadView, setReloadView] = useState(false);

  const handleFormSubmit = () => {
    // Set reloadView to trigger a reload of the View component
    setReloadView(true);
  };

  useEffect(() => {
    // Reset the reload trigger after the View component reloads
    if (reloadView) {
      setReloadView(false);
    }
  }, [reloadView]);
  return (
    <div className="App">
      <Navbar/>
      <Heading style={styles}  as="h1" size="2xl" textAlign="center" margin={"40px"}>
        Welcome to Student Information Portal
      </Heading>
      <SimpleGrid marginLeft={"30px"} columns={6} gridTemplateColumns={{base:'1fr 3fr',sm:'1fr 3fr',md:'1fr 3fr',lg:'2fr 4fr'}} display={{ base:'block',sm:'block',md:'block',lg:'block',xl:'grid'}}
        marginRight={"30px"} spacing={4}   justifyContent="center" minChildWidth={"500px"} >

        <Box marginBottom={{base:'20px',lg:'0px'}} height={"750px"}>
          <Addform  onFormSubmit={handleFormSubmit}/>
        </Box>
        <Box>
          <View reload={reloadView}/>
        </Box>
      </SimpleGrid>
      <Footer/>
    </div>
  );
}

export default App;
