//Context and State
import { useContext, useState } from "react";
import { Context } from "../../contexts/Context";
//Utils
import { getDisplayedBookmarks } from "../../utils/utils";
//Components
import Bookmark from "../Bookmark/Bookmark";
import Navigation from "../Paginate/Paginate";
//Packages
import { motion } from "framer-motion";
//Styles
import "./Bookmarks.scss";

const Bookmarks = () => {
  const { bookmarks, resetBookmarks } = useContext(Context);
  //Mode state - Editing, Deleting, Null (Standard)
  const [mode, setMode] = useState(null);

  //Pagination - Set default state page as 1. 20 bookmarks per page
  const [currentPage, setCurrentPage] = useState(1);
  const displayedBookmarks = getDisplayedBookmarks(bookmarks, currentPage);
  const totalPages = Math.ceil(bookmarks.length / 20);

  //Navigation
  const changePage = (change) => {
    if (change === "forward") {
      return setCurrentPage(currentPage + 1);
    }
    if (change === "back") {
      return setCurrentPage(currentPage - 1);
    }
    return setCurrentPage(change);
  };

  if (!bookmarks) {
    return <p>Loading . . . </p>;
  }

  return (
    <section className="bookmarks">
      <h2 className="bookmarks__title">YOUR BOOKMARKS</h2>
      {bookmarks.length > 0 ? (
        <div className="bookmarks__option-container">
          <p
            className={
              mode === "edit"
                ? "bookmarks__option bookmarks__option--active"
                : "bookmarks__option"
            }
            onClick={() => (mode === "edit" ? setMode(null) : setMode("edit"))}
          >
            EDIT
          </p>
          <p
            className={
              mode === "delete"
                ? "bookmarks__option bookmarks__option--active"
                : "bookmarks__option"
            }
            onClick={() =>
              mode === "delete" ? setMode(null) : setMode("delete")
            }
          >
            DELETE
          </p>
          <p className="bookmarks__option" onClick={() => resetBookmarks()}>
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
          <Bookmark currentBookmarks={displayedBookmarks} mode={mode} />
        ) : (
          <p className="bookmarks__error">You haven't saved anything yet.</p>
        )}
      </motion.div>
      <Navigation
        totalPages={totalPages}
        currentPage={currentPage}
        changePage={changePage}
      />
    </section>
  );
};

export default Bookmarks;
