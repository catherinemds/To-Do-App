import {useState} from 'react'
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = useState("");

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export default TodoSearch;
