import { v4 } from "uuid";
//Components
import { useState } from "react";
import Form from "./components/Form";
//Styles
import "./main.scss";

function App() {
  const [newBookmark, setNewBookmark] = useState({});

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
    console.log(newBookmark);
  };
  return (
    <main>
      <h1>bookmarkd</h1>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </main>
  );
}

export default App;
