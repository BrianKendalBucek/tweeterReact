function Tweet() {
  const tweet = {
    avatar: "https://i.imgur.com/73hZDYK.png",
    firstName: "Isaac",
    lastName: "Newton",
    handle: "@SirIsaac",
    body: "If I have seen further it is by standing on the shoulders of giants",
    age: "10 days ago"
  }
  return (
      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={tweet.avatar} alt="avatar" />
          <h2 className="tweet--name">{tweet.firstName} {tweet.lastName}</h2>
          <small className="tweet--handle">{tweet.handle}</small>
        </header>

        <div className="tweet--body">
          <p>
            {tweet.body}
          </p>
        </div>

        <footer className="tweet--footer">
          <small className="footer--age">{tweet.age}<small>
            <span className="footer--actions">
              <a href="#"><i className="fa fa-flag"></i></a>
              <a href="#"><i className="fa fa-retweet"></i></a>
              <a href="#"><i className="fa fa-heart"></i></a>'
            </span>
          </small></small>
        </footer>
      </article>
  );
}

export default Tweet;