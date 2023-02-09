//Styles
import "./Paginate.scss";

const Navigation = ({ totalPages, currentPage, changePage }) => {
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
        <li className="navigation__link" onClick={() => changePage("back")}>
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
        <li className="navigation__link" onClick={() => changePage("forward")}>
          &gt;
        </li>
      )}
    </ul>
  );
};

export default Navigation;
