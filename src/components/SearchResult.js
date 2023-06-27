import "./SearchResult.css";

export const SearchResult = ({ countries }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${countries}!`)}
    >
      {countries}
    </div>
  );
};
