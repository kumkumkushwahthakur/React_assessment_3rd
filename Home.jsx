import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

function Home() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/recipes");
      const item = await response.json();
      setData(item.recipes);
    }
    fetchData();
  }, []);
  return (
    <>
      {data.map((item) => (
        <Link key={item.id} to={`/recipes/${item.id}`} >{item.name}</Link>    
      ))}
      <input
        ref={inputRef}
        onChange={(e) => {
          e.target.ref;
        }}
        placeholder="Search"
      /> 
    </>
  );
}

export default Home;
