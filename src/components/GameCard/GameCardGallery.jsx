// GameCard.jsx
import GameCardItem from './GameCardItem'
import { usePopularGames } from '../../hooks/usePopularGames'

export default function GameCardGallery() {
  const { isLoading, popularGames } = usePopularGames()

  if (isLoading) {
    return <div>Loading</div>
  }

  if (!popularGames) {
    return null
  }

  return (
    <div className="container">
      <div className="row">
        {popularGames.map((game, index) => (
          <GameCardItem key={index} game={game} />
        ))}
      </div>
    </div>
  )
}
