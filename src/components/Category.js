const CategoryForm = () => {
  return (
    <section>
      <div className="mb-6" id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New category
        </h2>
        <form className="bg-slate-700 rounded-xl flex flex-col px-3  gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              title
            </label>
            <input
              type="text"
              name="category-title"
              id="category-title"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              description
            </label>
            <textarea
              id="category-description"
              name="category-description"
              type="text"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4 mb-4">
            <button
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
              id="cancel-add-category"
            >
              Cancel
            </button>
            <button
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
              id="add-new-category"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button className="text-slate-600 text-lg mb-4 font-medium">
        Add New Category?
      </button>
    </section>
  );
};

export default CategoryForm;
