const Form = ({ handleChange, handleSubmit, newBookmark, error }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__section">
        <label htmlFor="name" className="form__label">
          title
        </label>
        <input
          type="text"
          className="form__input"
          name="title"
          onChange={handleChange}
          value={newBookmark.title || ""}
        />
        {error === "title" && <p className="form__error">Give it a title!</p>}
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
        {error === "url" && <p className="form__error">Needs to be a URL</p>}
      </div>
      <button className="form__cta">Save!</button>
    </form>
  );
};

export default Form;
