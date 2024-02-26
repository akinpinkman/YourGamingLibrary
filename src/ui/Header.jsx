import styled from 'styled-components'
import LogoImage from '../assets/your-gaming-library-logo.png'

const StyledH2 = styled.aside`
  @media screen and (min-width: 480px) {
    display: flex;
    justify-content: center; /* Horizontally center */
    align-items: center; /* Vertically center */
  }

  font-size: 1.875rem;
  background-color: #3333331c;
  padding: 5px;
`

const ImageLink = styled.a`
  display: inline-block;
`

export default function Header() {
  return (
    <StyledH2>
      <ImageLink href="/">
        <img src={LogoImage} alt="Your Gaming Library Logo" width={400} />
      </ImageLink>
    </StyledH2>
  )
}
