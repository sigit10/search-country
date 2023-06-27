import { useState,  useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchResultsList } from "./SearchResultList";

import "./SearchBar.css";

// const Home = ({ setResults }) => {
//   const [input, setInput] = useState("");

//   const fetchData = (value) => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.filter((user) => {
//           return (
//             value &&
//             user &&
//             user.name &&
//             user.name.toLowerCase().includes(value)
//           );
//         });
//         setResults(results);
//       });
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
//   const regions = [
//     {
//       name: "Europe",
//     },
//     {
//       name: "Asia",
//     },
//     {
//       name: "Africa",
//     },
//     {
//       name: "Oceania",
//     },
//     {
//       name: "Americas",
//     },
//     {
//       name: "Antarctic",
//     },
//   ];

  // useEffect(() => {
  //   document.title = `Showing All Countries`;
  // }, []);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, );

  async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

//   async function filterByRegion(region) {
//     try {
//       const res = await fetch(
//         `https://restcountries.com/v3.1/region/${region}`
//       );
//       const data = await res.json();
//       setCountries(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

  return (
    <div className="">
    <h1 className="country">Search Engine</h1>
    <div className="input-wrapper">
      <form
      onSubmit={handleSearchCountry}
      autoComplete="off"
      className="max-w-4xl md:flex-1">
      </form>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Type any country name"
        required
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <FaSearch id="search-icon" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {countries.map((country) => (
              <SearchResultsList key={country.name} {...country} />
            ))}
          </div>
      </div>
    </div>
  );
};
