import { Outlet } from 'react-router-dom'
import Header from './Header'

import styled from 'styled-components'
import Footer from './Footer'

const StyledAppLayout = styled.main`
  font-size: 1.2rem;
`

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledAppLayout>
  )
}
