import GameCardItem from './GameCardItem'
import { usePopularGames } from '../../hooks/usePopularGames'
import { useSearchGames } from '../../hooks/useSearchGames'
import { useState } from 'react'
import { Spinner } from '@chakra-ui/react'

export default function GameCardItemContainer() {
  const [query, setQuery] = useState('')
  const { isLoading, popularGames } = usePopularGames()
  const { searchedGames } = useSearchGames(query)

  if (isLoading) {
    return (
      <Spinner thickness="6px" speed="0.80s" emptyColor="gray.200" color="blue.500" size="xl" />
    )
  }

  if (!popularGames) {
    return null
  }

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          {query === ''
            ? popularGames.map((game, index) => <GameCardItem key={index} game={game} />)
            : searchedGames &&
              searchedGames.map((game, index) => <GameCardItem key={index} game={game} />)}
        </div>
      </div>
    </>
  )
}
