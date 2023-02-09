//Context and State
import { useContext, useState } from "react";
import { Context } from "../../contexts/Context";
//Utils
import { cropTitle, cropUrl } from "../../utils/utils";
//Styles
import "./Bookmark.scss";
//Icons
import check from "../../assets/icons/check.svg";
import edit from "../../assets/icons/edit.svg";

const Bookmark = ({ currentBookmarks, mode }) => {
  const { editing, editBookmark, setEditing, deleteBookmark } =
    useContext(Context);
  //Saved input data
  const [updatedUrl, setUpdatedUrl] = useState("");

  const bookmark = currentBookmarks.map((bookmark) => {
    return (
      <div className="bookmark__container" key={bookmark.id}>
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
              <h3 className="bookmark__title">{cropTitle(bookmark.title)}</h3>
              <p className="bookmark__url">{cropUrl(bookmark.url)}</p>
            </a>
          </>
        )}

        <>
          {mode === "edit" && (
            <div className="bookmark__option-container">
              {editing === bookmark.id ? (
                <img
                  className="bookmark__option"
                  src={check}
                  alt="tick icon"
                  onClick={() =>
                    editBookmark(bookmark.id, updatedUrl, bookmark.title)
                  }
                />
              ) : (
                <img
                  src={edit}
                  alt="edit icon"
                  className="bookmark__option"
                  onClick={() => {
                    setUpdatedUrl("");
                    setEditing(bookmark.id);
                  }}
                />
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
