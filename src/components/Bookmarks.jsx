import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, deleteBookmark }) => {
  if (!bookmarks) {
    return <p>Loading . . . </p>;
  }
  return (
    <section className="bookmarks">
      <h2 className="bookmarks__title">Your Bookmarks</h2>
      {bookmarks.length > 0 ? (
        <Bookmark bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
      ) : (
        <p>You haven't saved anything yet</p>
      )}
    </section>
  );
};

export default Bookmarks;
