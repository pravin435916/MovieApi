import React, { useState, useEffect } from "react";
function MovieApi() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const apiKey = "1a2127e5";
  useEffect(() => {
    if (search === '') {
      setData(['']);
      return;
    }
    fetch(`http://www.omdbapi.com/?s=${search}&y=${search}&apikey=${apiKey}&`)
      .then((res) => res.json())
      .then((dta) => {
        console.log(dta);
        if (dta.Search) {
          setData(dta.Search);
        }
      })
      .catch((err) => {

        console.log(err);
      });
  }),[search];

   const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <h1 className="text-center font-bold">Movie Information</h1>
      <div className="p-10 flex gap-x-25 ">
        <input className="w-100 border px-10"
          type="text"
          placeholder="Enter a movie title"
          value={search}
          onChange={handleChange}
        />
        <button className="border-2 p-2 bg-black text-white ">Search</button>
      </div>
       <div className="movies m-12 flex flex-wrap gap-5 ">
      {data.map((m) => (
        <div className="m-1">
          <h1 className="font-bold">{m.Title}</h1>
          <h1>{m.Year}</h1>
          <h1>{m.Genre}</h1>
          <h1>{m.Released}</h1>
          <h1>{m.Country}</h1>
          {/* <h1>{m.Ratings[0].Value}</h1> */}
          <h1>{m.Awards}</h1>
          <img className="w-50 h-100 p-2 cover" src={m.Poster} alt={`${m.Title} Poster`} />
        </div>
         ))}
         </div>
   
    </>
  );
}
export default MovieApi;
