import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import unixToHumanDate from '../../utils/unixToHumanDate'

const StyledMainContainer = styled.aside`
  display: flex;
`

const StyledCoverContainer = styled.aside`
  display: flex;
  flex-direction: column;
  border: red 2px solid;
`
const StyledHeaderContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 2.5rem;
  border: blue 2px solid;
  padding: 1rem;
`
const StyledH2 = styled.h2`
  color: #000000;
`

const StyledH3 = styled.h3`
  color: #494949;
`

const StyledH4 = styled.h4`
  color: #747474;
`
const StyledSummary = styled.h4`
  padding-top: 2rem;
  font-size: 1rem;
`
const StyledGenres = styled.aside`
  padding: 1rem 1rem;
  margin: 1%;
  border: solid 1px #a7a7a7;
  font-size: 1rem;
`

export default function GamePages() {
  const { state } = useLocation()
  const { game } = state
  const processedGame = unixToHumanDate(game)

  const getImageUrl = () => {
    if (game.cover && game.cover.image_id) {
      const imageId = game.cover.image_id
      return `//images.igdb.com/igdb/image/upload/t_1080p/${imageId}.jpg`
    } else {
      return 'No Image Available'
    }
  }
  console.log(state)
  return (
    <>
      <StyledMainContainer>
        <StyledCoverContainer>
          <img src={getImageUrl()} alt={getImageUrl()} width={400} />
          <StyledGenres>
            <h5>Genres</h5>
            {game.genres.map((genre) => (
              <p key={genre.id}>&bull; {genre.name}</p>
            ))}
          </StyledGenres>
        </StyledCoverContainer>

        <StyledHeaderContainer>
          <StyledH2>{game.name}</StyledH2>
          <StyledH3>{processedGame.formattedDate}</StyledH3>
          <StyledH4>{game.involved_companies[0].company.name}</StyledH4>
          <StyledSummary>
            <p>{game.summary}</p>
          </StyledSummary>
        </StyledHeaderContainer>
      </StyledMainContainer>
    </>
  )
}
