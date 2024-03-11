import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

function App() {
  const a = `https://www.omdbapi.com/?s=avengers&apikey=ccd50419&p=20`;
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function name() {
      const el = await fetch(a);
      const el1 = await el.json();
      setMovie(el1.Search);
    }
    name();
  }, []);
  const btnSearch = async () => {
    const a = `https://www.omdbapi.com/?s=${search}&apikey=ccd50419&p=20`;
    const serch = await fetch(a);
    const serch2 = await serch.json();
    console.log(serch2);
    setMovie(serch2.Search);
  };
  return (
    <div>
      <nav>
        <div className="contianer">
          <h1>Movies</h1>
          <div className="profile">
          <div className="search">
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={btnSearch}>
              {" "}
              <CiSearch />
            </button>
           
          </div>
          <img src="public/person.jpg"></img>

          </div>
         
        </div>
      </nav>
      {movie.map((move) => {
        const { Title, Year, Type, Poster } = move;
        return (
          <>

          <div className="content">

            
            <div className="text1">
            <img src={Poster} alt="" />
            
            <div className="text">
            <h1>{Title}</h1>
            <h2>Release : {Year}</h2>
            <p>{Type}</p>

            <div className="text2">
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure assumenda doloremque eum iusto ratione ab quis expedita numquam saepe, labore nemo vitae alias, est doloribus distinctio accusantium accusamus consequuntur beatae?</p>
            <h1>Rating | <b><span>12+</span></b></h1>
            </div>
            
            </div>
            </div>

            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
