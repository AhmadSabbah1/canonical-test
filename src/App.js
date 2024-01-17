import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Card from './components/Card';

function App() {

  const [cardsData, setCardsData] = useState()

  const fetchData = async () => {
    try {
      if (!cardsData) {
        const res = await fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
        const data = await res.json()
        setCardsData(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className="App">
      taxim
    </div>
  );
}

export default App;
