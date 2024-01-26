import styled from "styled-components";
import GameCoverGallery from "../components/GameCoverGallery";

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
    <GameCoverGallery />
  </StyledGameCoverGallery>
  </>
  )
}
