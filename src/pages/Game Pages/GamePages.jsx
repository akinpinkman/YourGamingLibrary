import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import unixToHumanDate from '../../utils/unixToHumanDate'
import { get1080pImage } from '../../utils/get1080pImages'
import ImageSlider from '../../components/GameCard/ImageSlider'
import RatingIndicator from '../../ui/RatingIndicator'

const StyledMainContainer = styled.main`
  @media (max-width: 480px) {
    gap: 0;
  }
  @media (max-width: 1024px) {
  }
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  margin-top: 2rem;
  justify-content: center;
`

const StyledCoverContainer = styled.aside`
  border: solid 1px #a7a7a7;
`

const StyledHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: solid 1px #a7a7a7;
  padding: 1rem;
  position: relative;
`

const StyledH2 = styled.h1`
  color: #000000;
  font-family: 'Oswald', sans-serif;
  font-size: 45px;
`

const StyledH3 = styled.h2`
  color: #494949;
  font-family: 'Oswald', sans-serif;
`

const StyledH4 = styled.h3`
  color: #747474;
  font-family: 'Oswald', sans-serif;
`

const StyledSummary = styled.section`
  padding-top: 2rem;
  max-width: 80rem;
  font-family: 'Oswald', sans-serif;
`

const StyledStoryline = styled.section`
  padding-top: 2rem;
  font-family: 'Oswald', sans-serif;
`

const StyledGenresThemesContainer = styled.aside`
  border: solid 1px #a7a7a7;
  font-size: 1rem;
  font-family: 'Oswald', sans-serif;
`

const StyledGenres = styled.aside`
  padding: 1rem 1rem;
  font-size: 1rem;
`

const StyledThemes = styled.aside`
  padding: 1rem 1rem;
  font-size: 1rem;
`

const StyledDevelopers = styled.section`
  margin-top: auto;
  font-family: 'Oswald', sans-serif;
`

const StyledGameRating = styled.section`
  display: flex;
  justify-content: space-between;
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
          <StyledGenresThemesContainer>
            <StyledGenres>
              <h4>Genres</h4>
              {game.genres.map((genre) => (
                <li key={genre.id}> {genre.name}</li>
              ))}
            </StyledGenres>
            <StyledThemes>
              <h4>Platforms</h4>
              {game.platforms.map((platform) => (
                <li key={platform.id}> {platform.name}</li>
              ))}
            </StyledThemes>
          </StyledGenresThemesContainer>
        </StyledCoverContainer>

        <StyledHeaderContainer>
          <StyledGameRating>
            <StyledH2>{game.name}</StyledH2>
            <RatingIndicator
              rating={game.rating}
              width={80}
              height={80}
              fontSize={40}
              color={'white'}
            />
          </StyledGameRating>
          <StyledH3>{processedGame.formattedDate}</StyledH3>
          <StyledH4>{game.involved_companies[0].company.name}</StyledH4>
          <StyledSummary>
            <h4>Summary:</h4>
            <p>{game.summary}</p>
            {game.storyline && (
              <StyledStoryline>
                <h4>Storyline:</h4>
                <p>{game.storyline}</p>
              </StyledStoryline>
            )}
          </StyledSummary>
          <StyledDevelopers>
            <h4>Developers:</h4>
            {game.involved_companies.map((company) => (
              <li key={company.id}>{company.company.name}</li>
            ))}
          </StyledDevelopers>
        </StyledHeaderContainer>
        <ImageSlider screenshotImages={screenshotImages} />
      </StyledMainContainer>
    </>
  )
}
