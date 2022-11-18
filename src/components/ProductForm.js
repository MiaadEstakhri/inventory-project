import { useState } from "react";

const ProductForm = ({ categories }) => {
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductsFormData({ ...productsFormData, [name]: value });
  };

  return (
    <section className="">
      <div className="mb-6" id="product-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New product
        </h2>
        <form className="bg-slate-700 rounded-xl flex flex-col px-3  gap-y-4">
          <div>
            <label
              htmlFor="product-title"
              className="block mb-1 text-slate-400"
            >
              title
            </label>
            <input
              value={productsFormData.title}
              type="text"
              name="title"
              id="product-title"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto px-3"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="product-quantity"
              className="block mb-1 text-slate-400"
            >
              quantity
            </label>
            <input
              value={productsFormData.quantity}
              type="number"
              name="quantity"
              id="product-quantity"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto px-3"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="product-description"
              className="block mb-1 text-slate-400"
            >
              category
            </label>
            <select
              value={productsFormData.categoryId}
              id="product-category"
              name="categoryId"
              className="bg-transparent rounded-xl text-slate-400 w-full"
              onChange={changeHandler}
            >
              <option className="bg-slate-500 text-slate-400" value="">
                select a category
              </option>
              {categories.map((category) => {
                return (
                  <option
                    key={category.id}
                    className="bg-slate-500 text-slate-400"
                    value={category.id}
                  >
                    {category.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex items-center justify-between gap-x-4 mb-4">
            <button
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
              id="cancel-add-product"
            >
              Cancel
            </button>
            <button
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
              id="add-new-product"
            >
              Add product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductForm;
