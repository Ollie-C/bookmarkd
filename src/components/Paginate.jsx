const Navigation = ({ totalPages, changePage, currentPage, navPage }) => {
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
      {currentPage <= totalPages && currentPage > 1 && (
        <li className="navigation__link" onClick={() => navPage(0)}>
          &lt;
        </li>
      )}
      {pages.map((page) => (
        <li
          key={page}
          className={
            page === currentPage
              ? "navigation__link--active"
              : "navigation__link"
          }
          onClick={() => changePage(page)}
        >
          {page}
        </li>
      ))}
      {currentPage < totalPages && (
        <li className="navigation__link" onClick={() => navPage(1)}>
          &gt;
        </li>
      )}
    </ul>
  );
};

export default Navigation;
