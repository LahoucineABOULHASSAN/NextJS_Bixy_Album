const SearchForm = ({ handleFilter }) => {
  return (
    <form
      className="w-full md:w-3/4 mx-auto"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        className="shadow-md rounded-2xl bg-gray-200 focus:outline-none focus:bg-red-100 py-2 px-4 w-full"
        type="search"
        placeholder="Search"
        onChange={(event) => handleFilter(event.target.value)}
      />
    </form>
  );
};

export default SearchForm;
