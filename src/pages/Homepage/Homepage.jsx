import styled from 'styled-components'
import GameCardGallery from '../../components/GameCard/GameCardGallery'
import SearchBar from '../../components/SearchBar/SearchBar'

const StyledGameCoverGallery = styled.aside`
  display: flex;
  text-align: center;
  flex-direction: column;
`

export default function Homepage() {
  return (
    <>
      <StyledGameCoverGallery>
        <SearchBar />
        <GameCardGallery />
        {/* <GameCoverGallery /> */}
      </StyledGameCoverGallery>
    </>
  )
}
