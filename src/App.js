
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import GetStarted from './components/GetStarted';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';

function App() {
  //Initialize state to empty array
  const [state, setState] = useState([])
  
   
  //Fetch data from API
  const fetchSteps = async() => {
    const response = await fetch('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge');
    const data = await response.json();
    //Set the state array to the json data received so that it can be used by the app and passed down.
    setState(data)
  }
  
  //use useEffect to make API call only once when page renders
  useEffect(() => {

    fetchSteps()

  }, [])

  
  
  //Create app with included components. Components are broken down by section of the page
  return ( 
    <div className="App">
      <Header />
      <GetStarted />
      {/* Pass down the state array full of the Data that we fetched to the HowItWorks component */}
      <HowItWorks steps={state}/>
    </div>
  );
}

export default App;
