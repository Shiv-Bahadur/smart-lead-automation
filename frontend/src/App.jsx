import React, { useState, useEffect } from 'react';
import './App.css'
import NameInput from './components/NameInput';
import NameOutput from './components/NameOutput';

function App() {
  let [personDetails,setPersonDetails] = useState([]);

  const getPersonDetails = async () => {
    try{
      const response = await fetch(`http://localhost:5000/api/names`);
    if(!response.ok){
      throw new Error(`http error! Status: ${response.status}`)
    }
    const data = await response.json();
    setPersonDetails(data);
    }catch(err){
      console.error("Failed to fetch person details:", error);
    }
    
  }

  useEffect(() => {
    getPersonDetails();
  }, [])


  return (
    <>
      <div className='p-4'>

        <NameInput getPersonDetails={getPersonDetails} />
        <NameOutput data={personDetails} />
      </div>
    </>
  )
}

export default App
