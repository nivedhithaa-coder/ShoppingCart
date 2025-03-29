import { useEffect } from "react";
import { useState } from 'react';
import { useMemo } from "react";
import './App.css'
import Navbar from './components/Navbar'
import ListItem from "./components/ListItem";
import Card from './components/Card'

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const cartTotal = useMemo(() => price(cart), [cart]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.log(error))
  })

  function handleAddtoCart(data = {}) {
    const cartCopy = [...cart];

    const matchingItem = cartCopy.find((item) => item.id === data.id);

    if (matchingItem) {
      alert("Item already added to the cart!!!!");
      return;
    }
    else {
      cart.push(data);
      data.quantity=1;  
      document.getElementById("items_count").innerText = cart.length;
    }
  }
  function price(){
    let price=0;console.log("executing"+price)
    cart.forEach((items)=>{console.log(items.quantity+" "+items.price);Math.round(price+=(items.quantity*items.price))})
    const cartprice= Math.round(price);console.log(cart+cartprice)
    return cartprice;
  }
 
function quantityChange(e,type="",id){
  e.stopPropagation();
  const cartCopy = [...cart];

    const matchingItem = cartCopy.find((item) => item.id === id);

  if(type==="dec"&&matchingItem["quantity"]>1)
  {
    matchingItem.quantity-=1;

  }else if(type==="inc"){
    matchingItem.quantity+=1;
    }
  setCart(cartCopy);
  console.log(cartCopy);
}

function removeItem(id){
  const arr=cart.filter((items)=>items.id!==id);
  setCart(arr);
  price();
}
  return (
    <>
      <Navbar item={cart} quantityChange={quantityChange} price={cartTotal} removeItem={removeItem}/>
      
      <h1 className="px-10">Welcome to Shopping Mart!!!!!</h1>
      <div className="List">
        {products.map((p, index) => (
          // <Card data={p} key={index}/>
          <ListItem data={p} key={index} handleAddtoCart={handleAddtoCart} />
        ))}
        
      </div>


    </>
  )
}

export default App
