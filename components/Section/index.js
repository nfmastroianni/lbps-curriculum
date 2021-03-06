import styled from '@emotion/styled'
import SectionHeader from '../SectionHeader'

const SectionElement = styled.section`
  @media (min-width: 640px) {
    h2 {
      margin: 0.5rem;
    }
  }
`
const SectionContent = styled.div`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  h2 {
    text-align: center;
    margin: 1rem 0;
    color: var(--dark-green);
  }
  h3 {
    text-align: center;
    border-bottom: 1px solid var(--dark-gray);
    margin-top: 2rem;
    font-weight: 700;
  }
  p {
    margin: 0.5rem 0;
  }
  @media (min-width: 640px) {
    p {
      margin: 1rem 0;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
`

export default function Section({ children, headerText, id }) {
  return (
    <SectionElement id={id}>
      {headerText && <SectionHeader headerText={headerText} />}
      <SectionContent>{children}</SectionContent>
    </SectionElement>
  )
}
