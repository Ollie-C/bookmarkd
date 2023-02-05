const Form = ({ handleChange, handleSubmit }) => {
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
        />
      </div>
      <button className="form__cta">Save!</button>
    </form>
  );
};

export default Form;
