import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import unixToHumanDate from '../../utils/unixToHumanDate'
import { get1080pImage } from '../../utils/get1080pImages'
import ImageSlider from '../../components/GameCard/ImageSlider'
import RatingIndicator from '../../ui/ratingIndicator'
import { px } from 'framer-motion'

const StyledMainContainer = styled.main`
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

const StyledH2 = styled.h2`
  color: #000000;
`

const StyledH3 = styled.h3`
  color: #494949;
`

const StyledH4 = styled.h4`
  color: #747474;
`

const StyledSummary = styled.section`
  padding-top: 2rem;
  max-width: 80rem;
`

const StyledStoryline = styled.section`
  padding-top: 2rem;
`

const StyledGenresThemesContainer = styled.aside`
  border: solid 1px #a7a7a7;
  font-size: 1rem;
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

  console.log(state)
  return (
    <>
      <StyledMainContainer>
        <StyledCoverContainer>
          <img src={coverImage} alt={coverImage} style={{ maxWidth: '400px' }} />
          <StyledGenresThemesContainer>
            <StyledGenres>
              <h5>Genres</h5>
              {game.genres.map((genre) => (
                <li key={genre.id}> {genre.name}</li>
              ))}
            </StyledGenres>
            <StyledThemes>
              <h5>Platforms</h5>
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
            <b>Summary:</b>
            <p>{game.summary}</p>
            {game.storyline && (
              <StyledStoryline>
                <b>Storyline:</b>
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
