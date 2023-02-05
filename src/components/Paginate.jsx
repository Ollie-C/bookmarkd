const Navigation = ({ bookmarks }) => {
  //Get total # pages, round up
  let totalPages = Math.ceil(bookmarks.length / 20);

  //Return nothing if less than 20 bookmarks
  if (!totalPages) {
    return;
  }

  //
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <ul className="navigation">
      {pages.map((page) => (
        <li className="navigation__link">{page}</li>
      ))}
    </ul>
  );
};

export default Navigation;
