import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const StyledAppLayout = styled.aside`
  font-size: 1.2rem;
`

export default function AppLayout() {
  return (
    <StyledAppLayout>
      {/* <Sidebar /> */}
      <Outlet />
    </StyledAppLayout>
  )
}
