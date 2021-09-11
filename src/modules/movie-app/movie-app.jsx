import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';

import MovieCard from './components/movie-card';

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#22254b',
    fontFamily: '"Poppins", sans-serif',
    margin: 0,
  },
  header: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#373b69',
  },
  search: {
    backgroundColor: 'transparent',
    border: '2px solid #22254b',
    borderRadius: 50,
    fontFamily: 'inherit',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    color: '#fff',
    '&::placeholder': {
      color: '#7378c5',
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: '#22254b',
    },
  },
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const MovieApp = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(API_URL);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        setMovies(
          result.results.map(movie => ({
            title: movie.title,
            overview: movie.overview,
            posterPath: movie.poster_path,
            voteAverage: movie.vote_average,
          }))
        );
      });
  }, [url]);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      setUrl(SEARCH_API + searchText);
    },
    [searchText]
  );

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className={classes.search}
            placeholder="Search"
            onChange={e => setSearchText(e.target.value)}
          />
        </form>
      </header>
      <main className={classes.main}>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </main>
    </div>
  );
};

export default MovieApp;
