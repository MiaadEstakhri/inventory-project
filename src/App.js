import { useState } from "react";
import "./App.css";
import CategoryForm from "./components/Category";
import NavBar from "./components/Navbar";
import ProductForm from "./components/ProductForm";

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <div className="">
      <section className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductForm categories={categories}/>
        </div>
      </section>
    </div>
  );
}

export default App;
