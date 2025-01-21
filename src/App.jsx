import PageNavigate from "./components/PageNavigate"
import ProductItem from "./components/ProductItem"
import ProductList from "./components/ProductList"
import SearchBar from "./components/SearchBar"

function App() {


  return (
    <div className="bg-slate-400 max-w-screen-sm m-5 p-4">
      <h1 className="text-3xl font-bold text-pink-300 hover:underline">
        Product Search
      </h1>
      <div className="flex">
        <SearchBar />
        <PageNavigate />
      </div>
        <ProductList />
    </div>
  )
}

export default App
