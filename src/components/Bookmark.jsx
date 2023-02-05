const Bookmark = ({ bookmarks }) => {
  const bookmark = bookmarks.map((bookmark) => {
    return (
      <div className="bookmark">
        <div className="bookmark__content">
          <h3 className="bookmark__title">{bookmark.title}</h3>
          <p className="bookmark__url">{bookmark.url}</p>
        </div>
        <button className="bookmark__delete">X</button>
      </div>
    );
  });
  return bookmark;
};

export default Bookmark;
