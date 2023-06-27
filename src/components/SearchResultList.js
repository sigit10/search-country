import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";
import { Link } from "react-router-dom";

export const SearchResultsList = ({ countries }) => {
  return (
    <div className="results-list">
    <Link>
      {countries.map((country, id) => {
        return <SearchResult countries={country.name.common} key={id} />;
      })}
      </Link>
    </div>
  );
};
