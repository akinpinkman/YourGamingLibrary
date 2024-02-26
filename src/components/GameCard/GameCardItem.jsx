/* eslint-disable react/prop-types */
import unixToHumanDate from '../../utils/unixToHumanDate'
import cutSummary from '../../utils/cutSummary'
import { Link } from 'react-router-dom'
import { get1080pImage } from '../../utils/get1080pImages'
import RatingIndicator from '../../ui/ratingIndicator'
import styled, { keyframes } from 'styled-components'

const rotateInClockwise = keyframes`
  from {
    transform: translate(50%, -50%) rotateZ(90deg);
    opacity: 0;
  }
  to {
    transform: translate(50%, -50%) rotateZ(0deg);
    opacity: 1;
  }
`

const StyledCircleP = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  color: white;

  .card:hover & {
    opacity: 1;
    animation: ${rotateInClockwise} 0.5s ease-out;
  }
`

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

const GameCardItem = ({ game }) => {
  const processedGame = unixToHumanDate(game)
  const slicedSummary = cutSummary(game.summary, 40)
  const coverImage = get1080pImage(game.cover)

  const rating = Math.floor(game.rating)
  const backgroundColor = getColorBasedOnRating(rating)
  return (
    <Link className="col-4 col-md-3 col-lg-2 mt-5" to={`/games/${game.slug}`} state={{ game }}>
      <div className="card h-100">
        <img
          className="card-img-top ImgHover"
          srcSet={coverImage}
          src={coverImage}
          alt={game.cover ? `${game.name} Cover` : `${game.name} Cover Not Available`}
        />

        <div className="card-img-overlay">
          <div className="top-section">
            <h1 className="card-text fs-5">{game.name}</h1>
            <p className="date">({processedGame.formattedDate})</p>
            <StyledCircleP>
              <RatingIndicator rating={game.rating} width={48} height={48} fontSize={25} />
            </StyledCircleP>
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
