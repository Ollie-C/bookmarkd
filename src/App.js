import { useState, useEffect } from "react";
import { v4 } from "uuid";
//Components
import Form from "./components/Form";
import Bookmarks from "./components/Bookmarks";
//Styles
import "./main.scss";

function App() {
  const [newBookmark, setNewBookmark] = useState({});
  const [bookmarks, setBookmarks] = useState([]);

  const handleChange = ({ target }) => {
    setNewBookmark({ ...newBookmark, [target.name]: target.value, id: v4() });
  };

  // const validUrl = (url) => {
  //   try {
  //     if (new URL(url)) {
  //       return true;
  //     }
  //   } catch (e) {
  //     return false;
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    //On form submit, adds submitted bookmark to bookmarks saved in state
    setBookmarks([newBookmark, ...bookmarks]);
    //Reset form fields
    setNewBookmark({});
  };

  const deleteBookmark = (id) => {
    let updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(updatedBookmarks);
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
    <main>
      <h1>bookmarkd</h1>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newBookmark={newBookmark}
      />
      <Bookmarks bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
    </main>
  );
}

export default App;
