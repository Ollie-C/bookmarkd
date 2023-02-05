const Bookmark = ({ currentBookmarks, deleteBookmark }) => {
  const bookmark = currentBookmarks.map((bookmark) => {
    return (
      <div className="bookmark__container">
        <div className="bookmark" key={bookmark.id}>
          <h3 className="bookmark__title">{bookmark.title}</h3>
          <p className="bookmark__url">{bookmark.url}</p>
        </div>
        <div className="bookmark__delete-container">
          <p
            className="bookmark__delete"
            onClick={() => deleteBookmark(bookmark.id)}
          >
            X
          </p>
        </div>
      </div>
    );
  });
  return bookmark;
};

export default Bookmark;
