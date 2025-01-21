import { useEffect, useState } from "react"
import PageNavigate from "./components/PageNavigate"
import ProductList from "./components/ProductList"
import SearchBar from "./components/SearchBar"
import axios from "axios"

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const resp = await axios.get(`https://dummyjson.com/products`)
    console.log(resp.data);
    setProducts(resp.data.products)
  }

  useEffect(()=>{
    fetchProducts()
  },[])


  return (
    <div className="bg-slate-400 max-w-screen-sm m-5 p-4">
      <h1 className="text-3xl font-bold text-pink-300 hover:underline">
        Product Search
      </h1>
      <div className="flex gap-4">
        <SearchBar />
        <PageNavigate />
      </div>
        <ProductList products={products} />
    </div>
  )
}

export default App
