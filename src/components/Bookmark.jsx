const Bookmark = ({ currentBookmarks, deleteBookmark }) => {
  const bookmark = currentBookmarks.map((bookmark) => {
    //Last minute solution for longer title and url
    const croppedTitle = (word) => {
      if (word.length > 7) {
        return `${word.substring(0, 6)}...`;
      }
      return word;
    };
    const croppedUrl = (url) => {
      if (url.length > 25) {
        return `${url.substring(7, 30)}...`;
      }
      return `${url.substring(7, url.length)}`;
    };

    return (
      <div className="bookmark__container">
        <a
          href={bookmark.url}
          target="_blank"
          rel="noreferrer"
          className="bookmark"
          key={bookmark.id}
        >
          <h3 className="bookmark__title">{croppedTitle(bookmark.title)}</h3>
          <p className="bookmark__url">{croppedUrl(bookmark.url)}</p>
        </a>
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
