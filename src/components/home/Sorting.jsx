const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-between">
      <div>Home {">"} All </div>
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-gray-200 py-3 px-5"
        name=""
        id=""
      >
        <option disabled value="">
          Sorting
        </option>
        <option value="dec">The Lowest</option>
        <option value="inc">The Highest</option>
      </select>
    </div>
  );
};

export default Sorting;
