import React, {useEffect, useState} from 'react';
import './App.css';
import {FaTwitterSquare} from 'react-icons/fa'
import colorsArray from './Colors.js'

let quoteDataBase = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"


function App() {
  const [quote, setQuote] = useState("The way to get started is to quit talking and begin doing.")
  const [author, setAuthor] = useState("Walt Disney")
  const [randomNumber, setRandomNumber] = useState("0")
  const [quotes, setQuotes] = useState(null)
  const [randomColor, setRandomColor] = useState('#CFD8DC')

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await  response.json()
    setQuotes(parsedJSON.quotes)
    console.log(parsedJSON)
  }

  useEffect(() => {
    fetchQuotes(quoteDataBase)
  }, [quoteDataBase])


  

  const changeQuoteAndAuthor = () => {
    let randomInteger = Math.floor(Math.random() * quotes.length)
     setRandomNumber(randomInteger)
     setQuote(quotes[randomInteger].quote)
     setAuthor(quotes[randomInteger].author)
     setRandomColor(colorsArray[randomNumber])

  }
  
  return (
    <div className="App">
      <header className="App-header" style = {{backgroundColor: randomColor}}>
    <div id="quote-box" style = {{ color: randomColor}}>
      <p id="text">"{quote}"</p>
      <p id ="author">- {author}</p>
      <a id="tweet-quote"
      href={`http://www.twitter.com/intent/tweet?text=${quote} -${author}`}><FaTwitterSquare style={{ color: randomColor, height: "40px", width: "40px"}} /></a>
      <button style={{backgroundColor: randomColor, color: "white"}}id="new-quote" onClick={() =>changeQuoteAndAuthor()}>Change Quote</button>
    </div>
    </header>
    </div>
  );
}

export default App;
