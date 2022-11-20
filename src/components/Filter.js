const Filter = ({
  onSearch,
  onSort,
  sort,
  searchValue,
  categories,
  selectedCategory,
  onSelectedCategory,
}) => {
  return (
    <section>
      {/* search */}
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          Search
        </label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          className="bg-transparent  text-slate-400 rounded-xl border border-slate-500 px-3"
          value={searchValue}
          onChange={onSearch}
        />
      </div>
      {/* sort */}
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-input" className="text-slate-500 text-lg">
          Sort
        </label>
        <select
          type="type"
          name="sort-input"
          id="sort-input"
          className="bg-transparent rounded-xl text-slate-500"
          value={sort}
          onChange={onSort}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            All
          </option>
          <option className="bg-slate-500 text-slate-300" value="latest">
            latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            earliest
          </option>
        </select>
      </div>
      {/* category */}
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-input" className="text-slate-500 text-lg">
          Category
        </label>
        <select
          type="type"
          name="sort-input"
          id="sort-input"
          className="bg-transparent rounded-xl text-slate-500"
          value={selectedCategory}
          onChange={onSelectedCategory}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            All
          </option>
          {categories.map((category) => {
            return (
              <option
                className="bg-slate-500 text-slate-300"
                value={category.id}
                key={category.id}
              >
                {category.title}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
};

export default Filter;
