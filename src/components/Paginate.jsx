const Navigation = ({ bookmarks, changePage }) => {
  //Get total # pages, round up
  let totalPages = Math.ceil(bookmarks.length / 20);

  //Return nothing if less than 20 bookmarks
  if (!totalPages) {
    return;
  }

  //Creates numbered pages array
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <ul className="navigation">
      {pages.map((page) => (
        <li
          key={page}
          className="navigation__link"
          onClick={() => changePage(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
