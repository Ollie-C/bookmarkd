import { useState } from "react";
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

  const validUrl = (url) => {
    try {
      if (new URL(url)) {
        return true;
      }
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //On form submit, adds submitted bookmark to bookmarks saved in state
    setBookmarks([newBookmark, ...bookmarks]);
    //Reset form fields
    setNewBookmark({});
  };
  return (
    <main>
      <h1>bookmarkd</h1>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newBookmark={newBookmark}
      />
      <Bookmarks bookmarks={bookmarks} />
    </main>
  );
}

export default App;
