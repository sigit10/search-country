import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";
import Home from "./components/Home";
import { SearchResultsList } from "./components/SearchResultList";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Countries />}></Route> */}
        <Route path="/:name" element={<SingleCountry />}></Route>
        <Route path="/" element={<Home setResults={setResults}/>}>
        {results && results.length > 0 && <SearchResultsList results={results} />}</Route>
        <Route path="/" element={<SearchResultsList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
