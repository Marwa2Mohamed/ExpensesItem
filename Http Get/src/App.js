import React, { useEffect, useState, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [Movie, setMovie] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setError]  = useState('');
 
  
  const FetchMoviesHandler = useCallback(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/films/", { method: "get" })
      .then((filmsJSON_response) => {
        
        if(!filmsJSON_response.ok) { //status reponse not 200
           throw new Error (filmsJSON_response.status +  ": " + filmsJSON_response.statusText);
        }
        var films = filmsJSON_response.json();
        /**Output type: PromiseObject
         **Output result: Promise {<pending>}
                        [[Prototype]]: Promise
                        [[PromiseState]]: "fulfilled"
                        [[PromiseResult]]: Object
                        count: 6
                        next: null
                        previous: null
                        results: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
                        etc...
        */
        films.then((filmsData) => {
          // eslint-disable-next-line
          var recievedMovies = filmsData.results.map((film) => {
            return{
              id: film.episode_id,
              title: film.title,
              openingText: film.opening_crawl,
              releaseDate: film.release_date,
            };
          });
          setMovie(recievedMovies);
        }); //OutputResult.then([[PromiseResult]] => [[PromiseResult]].results.map(eachObject in array))
        setLoading(false);
      })
      .catch((err) => {
         setError(err.message);
         setLoading(false);
      });
  },[])

  useEffect(FetchMoviesHandler, [FetchMoviesHandler]);
  
  return (
    <React.Fragment>
      <section>
        <button onClick={FetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {errorMsg.length > 0 && <p>{errorMsg}</p>}
        {!isLoading && Movie.length === 0 && errorMsg.length === 0 && <p> No Movies Found.</p>}
        {!isLoading && Movie.length > 0 && <MoviesList movies={Movie} />}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
