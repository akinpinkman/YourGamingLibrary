/* eslint-disable react/prop-types */
import unixToHumanDate from '../../utils/unixToHumanDate'
import cutSummary from '../../utils/cutSummary'
import { Link } from 'react-router-dom'

const getColorBasedOnRating = (rating) => {
  if (isNaN(rating)) {
    return 'gray'
  } else if (rating <= 30) {
    return 'red'
  } else if (rating <= 50) {
    return 'orange'
  } else if (rating <= 70) {
    return 'yellow'
  } else {
    return 'green'
  }
}

//  export default function getImageUrl(){

// }

const GameCardItem = ({ game }) => {
  const processedGame = unixToHumanDate(game)
  const slicedSummary = cutSummary(game.summary, 40)
  const getImageUrl = () => {
    if (game.cover && game.cover.image_id) {
      const imageId = game.cover.image_id
      return `//images.igdb.com/igdb/image/upload/t_1080p/${imageId}.jpg`
    } else {
      return 'No Image Available'
    }
  }

  console.log(game)

  const rating = Math.floor(game.rating)
  const backgroundColor = getColorBasedOnRating(rating)
  return (
    <Link className="col-4 col-md-3 col-lg-2 mt-5" to={`/games/${game.slug}`} state={{ game }}>
      <div className="card h-100">
        <img
          className="card-img-top ImgHover"
          srcSet={getImageUrl()}
          src={getImageUrl()}
          alt={game.cover ? `${game.name} Cover` : `${game.name} Cover Not Available`}
        />

        <div className="card-img-overlay">
          <div className="top-section">
            <p className="card-text fs-5">{game.name}</p>
            <p className="date">({processedGame.formattedDate})</p>

            <span
              className="CircleP"
              style={{
                backgroundColor: backgroundColor
              }}>
              {isNaN(rating) ? 'N/A' : rating}
            </span>
          </div>

          <div className="bottom-section">
            <div className="summaryContainer">
              <p className="summary">{slicedSummary}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GameCardItem
