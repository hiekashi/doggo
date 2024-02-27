import "./PizzaPreview.css"
function PizzaPreview({pizza}){
    return <div class="pizza">
    <span id="image">
    <img src={`https://pizzas.shrp.dev/assets/${pizza.image}`}/>
    </span>
    <span class="text">
    <span class="title">
    <h2> {pizza.name}</h2>
    <p id="price">{pizza.price} €</p>
    </span>
    <p id="ingredients">Base {pizza.base}, {pizza.ingredients.join(", ")}</p>
    <button id="panier" onClick={() => filterPizzaBase("Crème")}>Ajouter au panier</button>
    </span>
    </div>
}

export default PizzaPreview