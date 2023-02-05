import { useState } from "react";
import Bookmark from "./Bookmark";
import Navigation from "./Paginate";
import { motion } from "framer-motion";

const Bookmarks = ({ bookmarks, deleteBookmark, reset }) => {
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

  //Get total # pages, round up
  let totalPages = Math.ceil(bookmarks.length / 20);

  //Numbered navigation
  const changePage = (page) => {
    setCurrentPage(page);
  };

  //Arrow navigation
  const navPage = (direction) => {
    if (direction) {
      return setCurrentPage(currentPage + 1);
    }
    return setCurrentPage(currentPage - 1);
  };

  if (!bookmarks) {
    return <p>Loading . . . </p>;
  }

  return (
    <section className="bookmarks">
      <h2 className="bookmarks__title">YOUR BOOKMARKS</h2>
      {bookmarks.length > 0 ? (
        <div className="bookmarks__clear-container">
          <p className="bookmarks__clear" onClick={() => reset()}>
            CLEAR ALL
          </p>
        </div>
      ) : (
        ""
      )}
      <motion.div
        className="bookmarks__container"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 1 }}
      >
        {bookmarks.length > 0 ? (
          <Bookmark
            currentBookmarks={currentBookmarks}
            deleteBookmark={deleteBookmark}
          />
        ) : (
          <p className="bookmarks__error">You haven't saved anything yet.</p>
        )}
      </motion.div>
      <Navigation
        bookmarks={bookmarks}
        totalPages={totalPages}
        changePage={changePage}
        currentPage={currentPage}
        navPage={navPage}
      />
    </section>
  );
};

export default Bookmarks;
