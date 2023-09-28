import React from 'react';
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
  const [reloadView, setReloadView] = React.useState(false);

  const handleFormSubmit = () => {
    // Set reloadView to trigger a reload of the View component
    setReloadView(true);
  };

  React.useEffect(() => {
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
      <SimpleGrid marginLeft={"30px"} marginRight={"30px"} spacing={4}   justifyContent="center" minChildWidth="500px">
        <Box >
          <Addform  onFormSubmit={handleFormSubmit}/>
        </Box>
        <Box >
          <View reload={reloadView}/>
        </Box>
      </SimpleGrid>
      <Footer/>
    </div>
  );
}

export default App;
