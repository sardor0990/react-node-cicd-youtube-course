import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [userName, setUsername] = useState('');

  useEffect(() => {
    getNames();
  }, [])

  const getNames = async() => {
    
    try{
      const response = await axios.get('http://localhost:5000/names');
      setUsername(response.data);
    console.log(response);

    }catch(error){
      console.log('Error fetching names', error);
    }

    
  }

  return (
    <>
      <h1>{userName}</h1>
    </>
  )
}

export default App
