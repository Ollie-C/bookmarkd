const Form = ({ handleChange, handleSubmit, newBookmark, error }) => {
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
      <button className="form__cta">SAVE!</button>
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
