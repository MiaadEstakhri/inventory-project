import { useState } from "react";
import "./App.css";
import CategoryForm from "./components/Category";
import NavBar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div className="">
      <section className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductForm categories={categories} setProducts={setProducts} />
          <ProductList products={products} />
        </div>
      </section>
    </div>
  );
}

export default App;
