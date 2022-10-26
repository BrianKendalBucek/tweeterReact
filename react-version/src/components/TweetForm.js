function TweetForm() {
  const handleSubmit = (e) => {e.preventDefault()
  };
  const placeHolder = "What are you humming about?"
  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={handleSubmit}>
        <textarea
          className="form__textarea"
          name="text"
          placeholder={placeHolder}
        ></textarea>
        <input type="submit" value="Tweet" className="form__input" onSubmit={handleSubmit} />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;