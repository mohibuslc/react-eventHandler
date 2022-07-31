
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Country from './components/country/Country';

function App() {

  const [rest  , setRest ] = useState([]) 

  const [cart , setCart]=useState([])


  useEffect(()=> {


    fetch('https://restcountries.com/v2/all')

    .then( res => res.json())
    .then( data => setRest(data))

  }, [])

  function handleClick(country){

    const newCart = [...cart ,country]

    setCart(newCart)

    
  }
  return (
    <div className="country-container">
      
    <div className="country-information ">
    <h2 style={{color:"	DarkViolet" ,  
    border: "2px solid DarkViolet", 
    textAlign:"center", padding: " 20px"}}> Countries Information : {rest.length}</h2>
 
    <h1 style ={{color:"blue"}}>Welcome to Rest-Country-project</h1>

   
    {

      rest.map(pd =><Country country ={pd} handleClick = {handleClick}></Country>)
    }

    
    </div>
    <div className=" cart-container">
    <Cart cart= {cart}></Cart>


    </div>

    

    </div>
  );
}

export default App;
