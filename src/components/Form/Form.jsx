//Context and State
import { useState, useContext } from "react";
import { Context } from "../../contexts/Context";
//Utils
import { repeated, validUrl } from "../../utils/utils";
//Packages
import { v4 } from "uuid";
//Styles
import "./Form.scss";

const Form = () => {
  const { setBookmarks, bookmarks } = useContext(Context);
  //Current submission values
  const [newBookmark, setNewBookmark] = useState({});
  //Error render state
  const [error, setError] = useState(null);

  //Save in state as user fills in form
  const handleChange = ({ target }) => {
    let { name, value } = target;
    setNewBookmark({ ...newBookmark, [name]: value, id: v4() });
  };

  //Run validation and update bookmarks on form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validation
    if (!newBookmark.title) {
      return setError("title");
    }
    if (!validUrl(newBookmark.url)) {
      return setError("url");
    }
    if (repeated(bookmarks, newBookmark.url)) {
      return setError("repeat");
    }
    //Prefix https://
    newBookmark.url = "https://" + newBookmark.url;

    //Update state with new values
    setBookmarks([newBookmark, ...bookmarks]);
    console.log(bookmarks);
    //Resets
    setNewBookmark({});
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__section">
        <label htmlFor="name" className="form__label">
          TITLE
        </label>
        <input
          type="text"
          className="form__input"
          name="title"
          onChange={handleChange}
          value={newBookmark.title || ""}
        />
      </div>
      <div className="form__section">
        <label htmlFor="url" className="form__label">
          URL
        </label>
        <input
          type="text"
          className="form__input"
          name="url"
          onChange={handleChange}
          value={newBookmark.url || ""}
        />
        <div className="form__placeholder">https://</div>
      </div>
      <button className="form__cta">SAVE</button>
      <div className="form__error-container">
        {error && (
          <p className="form__error">
            {error === "url" ? "NEEDS TO BE A URL!" : ""}
            {error === "title" ? "GIVE IT A TITLE!" : ""}
            {error === "repeat" ? "BOOKMARK ALREADY EXISTS!" : ""}
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
