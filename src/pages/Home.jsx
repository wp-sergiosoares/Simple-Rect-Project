import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react'

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Jonh Wick", release_date: "2010"},
        {id: 2, title: "ranh", release_date: "2020"},
        {id: 3, title: "fonhWick", release_date: "2000"},
    ]

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