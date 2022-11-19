import { useEffect, useState } from "react";
import "./App.css";
import CategoryForm from "./components/Category";
import Filter from "./components/Filter";
import NavBar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortData(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const sortData = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  useEffect(() => {
    const saveProducts = JSON.parse(localStorage.getItem("products")) || [];
    const saveCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(saveProducts);
    setCategories(saveCategories);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  return (
    <div className="">
      <section className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductForm categories={categories} setProducts={setProducts} />
          <Filter
            onSearch={searchHandler}
            onSort={sortHandler}
            sort={sort}
            searchValue={searchValue}
          />
          <ProductList
            products={filteredProducts}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
