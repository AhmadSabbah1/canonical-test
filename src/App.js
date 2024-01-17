import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [cardsData, setCardsData] = useState([])

  const fetchData = async() => {

    const res = await fetch("people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json ")
    console.log(res)

  }

  useEffect(() => {

  }, [])


  return (
    <div className="App">

    </div>
  );
}

export default App;
