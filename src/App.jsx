import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ShowProducts } from './components/ShowProducts'

function App() {
  const [products, setproducts] = useState([])

  const getProducts = async ()=>{
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()
    setproducts(data)
  }
  
  useEffect(()=>{
    getProducts()
  },[])

  const getnameProducts = ()=>{
    return <ul>
      <li>{products[6].title}</li>
    </ul>
  }
  
  if(products.length == 0)
    return <>
    <p>Cargando..</p>
    </>

  return (
    <>
      <h1>Tienda Online</h1>
      <button onClick={()=>{console.log(products)}}>Ver productos</button>
      {getnameProducts()}
      <ShowProducts product={products[4]} />
    </>
  )
}

export default App
