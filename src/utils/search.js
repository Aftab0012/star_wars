export const handleSearch = (value, originalData, setSearchVal, setData) => {
  setSearchVal(value);
  const trimmedSearch = value.trim().toLowerCase();
  const searchedMovie = originalData.filter(
    (item) =>
      item.title.toLowerCase().replace(/\s/g, '').includes(trimmedSearch) ||
      item.release_date.toLowerCase().replace(/\s/g, '').includes(trimmedSearch)
  );
  setData(searchedMovie);
};
