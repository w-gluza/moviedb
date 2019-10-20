import React from 'react';
import { useFetch } from './hooks';
import './App.scss';

function App() {
  const [data, loading] = useFetch(
    'https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=91a5fc268ccbbfd9329f577618cab7a8'
  );
  const results = data.results;
  const baseUrl = "https://image.tmdb.org/t/p/";
  const imgWidth = "w500";
  return (
    <>
      <header>
        <h1>Movie Database</h1>
      </header>
      {loading ? (
        'Loading...'
      ) : (
          <main className="main">
            <section className="section">
              {results.map(({ id, original_title, poster_path, overview }) => (
                <article>
                  <h2 key={id} id={id}>{original_title}</h2>
                  <img className="img" src={`${baseUrl}${imgWidth}` + poster_path} alt={original_title}></img>
                  <p>{overview}</p>
                </article>
              ))}
            </section>
          </main>
        )}
    </>
  );
}

export default App;
