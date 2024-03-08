import styled from 'styled-components'
import GameCardGallery from '../../components/GameCard/GameCardItemContainer'

const StyledGameCoverGallery = styled.aside`
  display: flex;
  text-align: center;
  flex-direction: column;
`

export default function Homepage() {
  return (
    <>
      <StyledGameCoverGallery>
        <GameCardGallery />
      </StyledGameCoverGallery>
    </>
  )
}
