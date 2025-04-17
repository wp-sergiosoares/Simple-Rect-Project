import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react'
import { searchMovies, getPopularMovies } from '../services/api'
import "../css/Home.css"

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [erros, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // só corre uma vez
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery("");
    }
    
 return (
    <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input
            type="text"
            placeholder='Search for movies...'
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
             <button type="submit" className="search-btn">Search</button>
        </form>

        <div className="movies-grid">
            {console.log(movies)}
            {movies.map(
                (movie) =>
                (
                    <MovieCard movie={movie} key={movie.id} />
                )
            )}
        </div>

    </div>
  )
}

export default Home