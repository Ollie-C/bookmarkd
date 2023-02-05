const Navigation = ({ bookmarks, changePage, currentPage }) => {
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

  console.log(currentPage);
  console.log(pages);

  return (
    <ul className="navigation">
      {pages.map((page) => (
        <li
          key={page}
          className={
            page == currentPage
              ? "navigation__link--active"
              : "navigation__link"
          }
          onClick={() => changePage(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
