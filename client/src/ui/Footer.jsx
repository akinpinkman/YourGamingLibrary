import styled from 'styled-components'

let currentDate = new Date()

let currentYear = currentDate.getFullYear()

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  height: 6rem;
  background-color: #3333331c;
`

export default function Footer() {
  return (
    <StyledFooter>
      <h5>Akın Bilgin &#169; {currentYear}</h5>
    </StyledFooter>
  )
}
