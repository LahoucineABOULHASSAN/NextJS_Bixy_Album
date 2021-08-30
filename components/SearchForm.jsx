const SearchForm = ({ handleFilter }) => {
  return (
    <form
      className=" w-2/4 mt-12 mx-auto"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        className="border border-2 rounded-xl border-gray-500 focus:outline-none focus:border-red-300 py-1 px-3 w-full"
        type="search"
        placeholder="Search"
        onChange={(event) => handleFilter(event.target.value)}
      />
    </form>
  );
};

export default SearchForm;
