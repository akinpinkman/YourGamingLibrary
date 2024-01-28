import styled from 'styled-components'
import GameCoverGallery from '../../components/GameCoverGallery'
import GameCard from '../../components/GameCard/GameCard'

const StyledGameCoverGallery = styled.aside`
  display: flex;
  text-align: center;
  flex-direction: column;
`

export default function Homepage() {
  return (
    <>
      <StyledGameCoverGallery>
        <h1>Homepage</h1>
        <GameCard />
        {/* <GameCoverGallery /> */}
      </StyledGameCoverGallery>
    </>
  )
}
