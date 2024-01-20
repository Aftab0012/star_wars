export const handleSortBy = (
  sortByValue,
  setSortBy,
  setData,
  originalData,
  data
) => {
  let sortedData = [...data];

  switch (sortByValue) {
    case 'year':
      sortedData.sort((a, b) => a.release_date.localeCompare(b.release_date));
      break;
    case 'episode':
      sortedData.sort((a, b) => a.episode_id - b.episode_id);
      break;
    default:
      sortedData = [...originalData];
      break;
  }

  setSortBy(sortByValue);
  setData(sortedData);
};
