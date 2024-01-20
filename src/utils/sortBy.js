export const handleSortBy = (
  sortByValue,
  setSortBy,
  setData,
  originalData,
  data
) => {
  let sortedData = [...data];

  switch (sortByValue) {
    case 'episode':
      sortedData.sort((a, b) => a.episode_id - b.episode_id);
      break;
    case 'title':
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      // If no valid sorting option is selected, return the original data
      sortedData = [...originalData];
      break;
  }

  setSortBy(sortByValue);
  setData(sortedData);
};
