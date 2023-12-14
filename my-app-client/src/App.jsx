import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import PhoneInfo from './components/PhoneInfo'
import { Link } from 'react-router-dom'

function App() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(null);




  useEffect (() => { 
    getData();


  },[showInfo])

  const getData = async()=>{

    try {
      const response = await axios.get("http://localhost:5005/api/phones")
      setData(response.data)
      setIsLoading(false);
    }catch (err) {}}
  
    const handleInfo = async (id) => {
      setIsLoading(true)
      try {
        const responseIndo = await axios.get(`http://localhost:5005/api/phones/${id}`)
        setShowInfo(responseIndo.data)
        setIsLoading(false)
      }catch (err) {

      }
    }


  if (isLoading) {
    return <h4>Loading ...</h4>
  }

  return (
    <div id='list-container'>
    {showInfo ? <PhoneInfo data={showInfo}/>: null}
    <hr />
    {data.map((each) => {
      return (
        <div id='singlePhone' >
          <button>
          <h3 onClick={() => { handleInfo(each.id)}}>{each.name}</h3>
          </button>
          
        </div>
      )
    })}


    </div>
  )
}

export default App
