import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Homepage from "../pages/Homepage";

const StyledAppLayout = styled.aside`
font-size: 1.2rem;
`

const StyledOutlet = styled.aside`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  
  
`

export default function AppLayout() {
  return (
    <StyledAppLayout>
        <Sidebar />
        <StyledOutlet>
          <Outlet />
        </StyledOutlet>
    </StyledAppLayout>
  );
}
