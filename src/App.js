import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Card from './components/Card';

function App() {

  const [cardsData, setCardsData] = useState([])

  const fetchData = async () => {
    try {
      if (cardsData.length === 0) {
        const res = await fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
        const data = await res.json()
        console.log(data)
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
    <>
    <div class="row ">
    {cardsData.map((card, index) => (
          <div class="col-4 ">
            <Card content={card} key={index} />
          </div>
      ))}

    </div>

    </>
  );
}

export default App;
