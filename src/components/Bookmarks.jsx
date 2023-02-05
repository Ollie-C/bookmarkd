import { useState } from "react";
import Bookmark from "./Bookmark";
import Navigation from "./Paginate";

const Bookmarks = ({ bookmarks, deleteBookmark }) => {
  //Pagination
  //Set default state page as 1
  const [currentPage, setCurrentPage] = useState(1);
  //20 bookmarks per page
  const lastBookmarkIndex = currentPage * 20;
  const firstBookmarkIndex = lastBookmarkIndex - 20;
  const currentBookmarks = bookmarks.slice(
    firstBookmarkIndex,
    lastBookmarkIndex
  );

  const changePage = (page) => {
    setCurrentPage(page);
  };

  if (!bookmarks) {
    return <p>Loading . . . </p>;
  }

  return (
    <section className="bookmarks">
      <h2 className="bookmarks__title">Your Bookmarks</h2>
      {bookmarks.length > 0 ? (
        <Bookmark
          currentBookmarks={currentBookmarks}
          deleteBookmark={deleteBookmark}
        />
      ) : (
        <p>You haven't saved anything yet</p>
      )}
      <Navigation bookmarks={bookmarks} changePage={changePage} />
    </section>
  );
};

export default Bookmarks;
