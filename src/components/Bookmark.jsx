const Bookmark = ({ currentBookmarks, deleteBookmark }) => {
  const bookmark = currentBookmarks.map((bookmark) => {
    return (
      <div className="bookmark" key={bookmark.id}>
        <div className="bookmark__content">
          <h3 className="bookmark__title">{bookmark.title}</h3>
          <p className="bookmark__url">{bookmark.url}</p>
        </div>
        <button
          className="bookmark__delete"
          onClick={() => deleteBookmark(bookmark.id)}
        >
          X
        </button>
      </div>
    );
  });
  return bookmark;
};

export default Bookmark;
