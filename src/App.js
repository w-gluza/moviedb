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
      {loading ? (
        'Loading...'
      ) : (
          <main className="main">
            <h1>Most popular movies right now!</h1>
            <section className="section">
              {results.map(({ id, original_title, poster_path, overview, popularity, vote_average }) => (
                <article className="article" key={id}>
                  <img className="img" src={`${baseUrl}${imgWidth}` + poster_path} alt={original_title}></img>
                  <section className="description">
                    <h2 key={id} id={id}>{original_title}</h2>
                    <div className="voting">
                      <p>Seen by: {popularity}</p>
                      <p className="vote-average">&#9734;{vote_average}</p>
                    </div>
                    <p>{overview}</p>
                  </section>
                </article>
              ))}
            </section>
          </main>
        )}
    </>
  );
}

export default App;
