import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

const StyledSidebar = styled.aside`
    display: flex;
    flex-direction: column;
`

export default function Sidebar() {
  return (
    <StyledSidebar>
    <Logo />
    <Navbar />
    </StyledSidebar>
  )
}
