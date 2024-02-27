import axios from "axios"
import './App.css'
import {useEffect, useState} from "react";
import PizzaPreview from "./components/PizzaPreview.jsx";
import pizzaImage from "C:/Users/Océane/OneDrive/Documents/hello-world/logo_pitsa.png";

function App() {
  const [isLoading,setLoading] =useState(false)
  const[isError,setError] =useState(false)
  const [pizzas, setPizzas] = useState([])
  const [filterPizza, setFilterPizza] = useState([])

  useEffect(() => {
    async function loadPizzas(){
      const api="https://pizzas.shrp.dev/items/pizzas"
      try{
        setLoading(true)
        setError(false)
        const response = await axios.get(api)
        const data  = await response.data.data

        setLoading(false);
        setError(false);

        setPizzas(data);
        setFilterPizza(data);
      }catch (error){
        console.error(error)
        setLoading(false)
        setError(true)
      }
    }
    loadPizzas()
  }, []);

  const filterPizzaBase = (base) => {
    const filtered = pizzas.filter((pizza) => pizza.base === base);
    setFilterPizza(filtered);
  }

  return (
      <div className="App">
        {isLoading && <p>Chargement....</p>}
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        {isError && <p> Une erreur s'est produite</p>}
        
        <div class="all">
          <div class="navbar">
            <span class="logo">
          <img src={pizzaImage} id="logo"/>
            <span id="titre">PITSA</span>
            </span>
            <span id="boutons_navbar">
              <button class="button_navbar" onClick={() => filterPizzaBase("Crème")}>Mon compte</button>
              <button class="button_navbar" onClick={() => filterPizzaBase("Crème")}>Mon panier</button>
              </span>
          </div>

          <div class="filter">
            Filtrer par base :
            <button class="button" onClick={() => filterPizzaBase("Tomate")}>Tomate</button>
            <button class="button" onClick={() => filterPizzaBase("Crème")}>Crème</button>
          </div>
        </div>
        
        <div class="list">
          {filterPizza.map((pizza)=> (
            < PizzaPreview key={pizza.id} pizza={pizza}/>
            ))}
        </div>   
      </div>
  );
}

export default App;
