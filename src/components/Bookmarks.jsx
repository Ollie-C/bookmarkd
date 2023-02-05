import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks }) => {
  if (!bookmarks) {
    return <p>Loading . . . </p>;
  }
  return (
    <section className="bookmarks">
      <h2 className="bookmarks__title">Your Bookmarks</h2>
      {bookmarks.length > 0 ? (
        <Bookmark bookmarks={bookmarks} />
      ) : (
        <p>You haven't saved anything yet</p>
      )}
    </section>
  );
};

export default Bookmarks;
