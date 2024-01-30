// GameCardItem.jsx
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

const GameCardItem = ({ game }) => {
  const processedGame = unixToHumanDate(game)
  const slicedSummary = cutSummary(game.summary, 40)

  const getImageUrl = () => {
    const imageId = game.cover.image_id
    return `//images.igdb.com/igdb/image/upload/t_1080p/${imageId}.jpg`
  }

  return (
    <div className="col-4 col-md-3 col-lg-2 mb-4">
      <div className="card h-100">
        <img
          className="card-img-top ImgHover"
          srcSet={getImageUrl()}
          src={getImageUrl()}
          alt={`Game Cover ${game.id}`}
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
}

export default GameCardItem
