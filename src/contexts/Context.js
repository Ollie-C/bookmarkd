import { useState, createContext, useEffect } from "react";

const Context = createContext();

const ContextWrapper = ({ children }) => {
  //Global bookmark state
  const [bookmarks, setBookmarks] = useState([]);
  //Bookmark is being edited
  const [editing, setEditing] = useState(null);

  const editBookmark = (id, newUrl, title) => {
    const editedBookmark = {
      title: title,
      id: id,
      url: "https://" + newUrl,
    };

    //Rewrite data
    const updatedBookmarks = bookmarks.map((bookmark) =>
      bookmark.id === id ? editedBookmark : bookmark
    );
    setBookmarks(updatedBookmarks);
    //Reset editing state
    setEditing(null);
  };

  //DELETE INDIVIDUAL bookmark by ID
  const deleteBookmark = (id) => {
    let updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(updatedBookmarks);
  };

  //DELETE ALL by resetting value in state
  const resetBookmarks = () => {
    setBookmarks([]);
  };

  //Sync localstorage and state on page reload
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (savedBookmarks) {
      if (savedBookmarks.length > 0) {
        setBookmarks(savedBookmarks);
      }
    }
  }, []);

  //Set bookmarks in localStorage from state - on bookmarks state change
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <Context.Provider
      value={{
        bookmarks,
        setBookmarks,
        editing,
        setEditing,
        editBookmark,
        deleteBookmark,
        resetBookmarks,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextWrapper };
