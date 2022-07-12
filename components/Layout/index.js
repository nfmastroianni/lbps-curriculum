import styled from '@emotion/styled'
import Navbar from '../Navbar'
import Footer from '../Footer'

const SiteWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Main = styled.main`
  margin-top: 73px;
  padding-top: 0.5rem;
  @media (min-width: 640px) {
    padding-top: 1rem;
  }
`

export default function Layout({ children }) {
  return (
    <SiteWrapper>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </SiteWrapper>
  )
}
