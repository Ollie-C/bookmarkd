import { useState, useEffect } from "react";
import { v4 } from "uuid";
//Components
import Form from "./components/Form";
import Bookmarks from "./components/Bookmarks";
//Styles
import "./styles/main.scss";

function App() {
  const [newBookmark, setNewBookmark] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = ({ target }) => {
    setNewBookmark({ ...newBookmark, [target.name]: target.value, id: v4() });
  };

  //Check if URL against URL constructor to return boolean
  const validUrl = (url) => {
    try {
      if (new URL(url)) {
        return true;
      }
    } catch (e) {
      return false;
    }
  };

  //Check if bookmark already exists
  const repeated = (url) => {
    return bookmarks.filter((bookmark) => bookmark.url === url).length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validation
    if (!newBookmark.title) {
      return setError("title");
    }
    if (!validUrl(newBookmark.url)) {
      return setError("url");
    }

    if (repeated(newBookmark.url)) {
      return setError("repeat");
    }
    //On form submit, adds submitted bookmark to bookmarks saved in state
    setBookmarks([newBookmark, ...bookmarks]);
    //Resets
    setNewBookmark({});
    setError(null);
  };

  const deleteBookmark = (id) => {
    let updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(updatedBookmarks);
  };

  const reset = () => {
    setBookmarks([]);
  };

  //Get bookmarks from localStorage, update state - on rerender
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (savedBookmarks.length > 0) {
      setBookmarks(savedBookmarks);
    }
  }, []);

  //Set bookmarks in localStorage from state - on bookmarks state change
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <>
      <header>
        <h1>bookmarkd</h1>
      </header>
      <main>
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          newBookmark={newBookmark}
          error={error}
        />
        <Bookmarks
          bookmarks={bookmarks}
          deleteBookmark={deleteBookmark}
          reset={reset}
        />
      </main>
    </>
  );
}

export default App;
