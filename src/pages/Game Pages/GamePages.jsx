import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import unixToHumanDate from '../../utils/unixToHumanDate'
import { get1080pImage } from '../../utils/get1080pImages'
// import ImageSlider from '../../components/GameCard/ImageSlider'

const StyledMainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  margin-top: 2rem;
  justify-content: center;
  /* flex-direction: column; */
`

const StyledCoverContainer = styled.aside`
  border: red 2px solid;
`
const StyledHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: blue 2px solid;
  padding: 1rem;
`
const StyledImageSlider = styled.section`
  margin-top: 5rem;
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
  const screenshotImages = game.screenshots
    ? game.screenshots.filter((screenshot) => screenshot && screenshot.url).map(get1080pImage)
    : []
  const coverImage = get1080pImage(game.cover)

  return (
    <>
      <StyledMainContainer>
        <StyledCoverContainer>
          <img src={coverImage} alt={coverImage} style={{ maxWidth: '400px' }} />
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
        <StyledImageSlider>
          {/* <ImageSlider>
            <img srcSet={screenshotImages[7]} />
          </ImageSlider> */}
        </StyledImageSlider>
      </StyledMainContainer>
    </>
  )
}
