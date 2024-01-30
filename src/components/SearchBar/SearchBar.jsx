import { useState } from 'react'
import { useSearchGames } from '../../hooks/useSearchGames'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const { isLoading, searchedGames, error } = useSearchGames(query)

  const handleSearch = () => {
    // No button click needed with useSearchGames handling queries
  }
  console.log(searchedGames)

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <ul>
            {searchedGames.map((game) => (
              <li key={game.id}>{game.name}</li>
            ))}
          </ul>
        )}
      </form>
    </nav>
  )
}
