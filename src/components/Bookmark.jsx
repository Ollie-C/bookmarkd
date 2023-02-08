import { useState } from "react";

const Bookmark = ({
  currentBookmarks,
  deleteBookmark,
  editing,
  editBookmark,
  setEditing,
  mode,
}) => {
  const [updatedUrl, setUpdatedUrl] = useState("");

  // Last minute solution for longer title and url
  const croppedTitle = (word) => {
    if (word.length > 8) {
      return `${word.substring(0, 6)} ...`;
    }
    return word;
  };
  const croppedUrl = (url) => {
    if (url.length > 18) {
      return `${url.substring(0, 18)}...`;
    }
    return `${url.substring(0, url.length)}`;
  };

  const bookmark = currentBookmarks.map((bookmark) => {
    return (
      <div className="bookmark__container">
        {editing === bookmark.id ? (
          <input
            onChange={(e) => setUpdatedUrl(e.target.value)}
            value={updatedUrl || ""}
            className="bookmark__input"
          />
        ) : (
          <>
            <a
              href={bookmark.url}
              target="_blank"
              rel="noreferrer"
              className="bookmark"
              key={bookmark.id}
            >
              <h3 className="bookmark__title">
                {croppedTitle(bookmark.title)}
              </h3>
              <p className="bookmark__url">{croppedUrl(bookmark.url)}</p>
            </a>
          </>
        )}

        <>
          {mode === "edit" && (
            <div className="bookmark__option-container">
              {editing === bookmark.id ? (
                <p
                  className="bookmark__option"
                  onClick={() =>
                    editBookmark(bookmark.id, updatedUrl, bookmark.title)
                  }
                >
                  OK
                </p>
              ) : (
                <p
                  className="bookmark__option"
                  onClick={() => {
                    setUpdatedUrl("");
                    setEditing(bookmark.id);
                  }}
                >
                  &lt;
                </p>
              )}
            </div>
          )}
          {mode === "delete" && (
            <div className="bookmark__option-container">
              <p
                className="bookmark__option"
                onClick={() => deleteBookmark(bookmark.id)}
              >
                X
              </p>
            </div>
          )}
        </>
      </div>
    );
  });
  return bookmark;
};

export default Bookmark;
