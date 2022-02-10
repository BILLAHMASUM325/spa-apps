
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';
import data from './data/data.json';


function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
      setClubs(data)
  }, [])

  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data)

    console.log(data)
    const names = data.map(country => country.name.common)
    console.log(names)
    })
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (details) => {
    
    // console.log('added', details.name.common)
    const newCart = [...cart, details]
    setCart(newCart)
  }

  return (
    <div className="App">
      <h1>country loaded: {countries.length}</h1>
    <h4>Country added: {cart.length}</h4>
      <Cart cart ={cart}></Cart>
      <ul>
        {
          clubs.map(clubs => <li>{clubs.name}</li>)
        }
      </ul>
      <ul>
        {
          countries.map(country => <Country details = {country} handleAddCountry = {handleAddCountry}></Country>)
        }
      </ul>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
