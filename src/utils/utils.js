//Get current 20 bookmarks for pagination
export const getDisplayedBookmarks = (bookmarks, currentPage) => {
  const lastBookmarkIndex = currentPage * 20;
  const firstBookmarkIndex = lastBookmarkIndex - 20;
  const currentBookmarks = bookmarks.slice(
    firstBookmarkIndex,
    lastBookmarkIndex
  );

  return currentBookmarks;
};

//Crop input data
export const cropTitle = (word) => {
  if (word.length > 10) {
    return `${word.substring(0, 10)} ..`;
  }
  return word;
};

export const cropUrl = (url) => {
  if (url.length > 15) {
    return `${url.substring(0, 15)} ..`;
  }
  return `${url.substring(0, url.length)}`;
};

//Form validation
export const repeated = (bookmarks, url) => {
  //Check if already saved
  return (
    bookmarks.filter((bookmark) => bookmark.url === "https://" + url).length > 0
  );
};

export const validUrl = (url) => {
  //Check if user input data
  if (!url) {
    return false;
  }
  return true;
  /* To implement further validation:
  - Remove https:// if user types this in
  - Check pattern before domain name
  - Validate domain name
  */
};
