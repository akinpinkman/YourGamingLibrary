import { usePopularGames } from '../../hooks/usePopularGames'
import unixToHumanDate from '../../utils/unixToHumanDate'
import cutSummary from '../../utils/cutSummary'

const getColorBasedOnRating = (rating) => {
  if (rating <= 30) {
    return 'red'
  } else if (rating <= 50) {
    return 'orange'
  } else if (rating <= 70) {
    return 'yellow'
  } else {
    return 'green'
  }
}

export default function GameCard() {
  const { isLoading, popularGames } = usePopularGames()

  if (isLoading) {
    return <div>Loading</div>
  }

  if (!popularGames) {
    return null
  }

  const getImageIds = popularGames.map((image) => image.cover.image_id)
  const gameCoverUrls = getImageIds.map(
    (imageId) => `//images.igdb.com/igdb/image/upload/t_1080p/${imageId}.jpg`
  )

  return (
    <div className="container">
      <div className="row">
        {popularGames.map((game, index) => {
          const processedGame = unixToHumanDate(game)
          const slicedSummary = cutSummary(game.summary, 40)

          return (
            <div className="col-4 col-md-3 col-lg-2 mb-4" key={index}>
              <div className="card h-100">
                <img
                  className="card-img-top ImgHover"
                  srcSet={`${gameCoverUrls[index]}`}
                  src={gameCoverUrls[index]}
                  alt={`Game Cover ${index}`}
                />
                <div className="card-img-overlay">
                  <div className="top-section">
                    <p className="card-text fs-5">{game.name}</p>
                    <p className="date">({processedGame.formattedDate})</p>
                    <span
                      className="CircleP"
                      style={{
                        backgroundColor: getColorBasedOnRating(Math.floor(game.rating))
                      }}>
                      {Math.floor(game.rating)}
                    </span>
                  </div>
                  <div className="bottom-section">
                    <div className="summaryContainer">
                      <p className="summary">{slicedSummary}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
