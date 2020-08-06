import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import YugiCard from "../components/YugiCard";
import useDebounce from "../hooks/useDebounce";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 250);

  useEffect(() => {
    if (debouncedSearch) {
      setIsSearching(true);
      fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${debouncedSearch}&num=50&offset=0`
      )
        .then((results) => {
          return results.json();
        })
        .then(({ data }) => {
          setIsSearching(false);
          setResults(data);
        });
    } else setResults([]);
  }, [debouncedSearch]);

  return (
    <div style={{ marginTop: "25px" }}>
      <input
        placeholder="Search Card by Name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isSearching && <Loader />}

      <div className="container" style={{ marginTop: "25px" }}>
        <div className="columns is-multiline">
          {results.map((result) => (
            <YugiCard
              id={result.id}
              key={result.id}
              card={result.name}
              image={result.card_images[0].image_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
