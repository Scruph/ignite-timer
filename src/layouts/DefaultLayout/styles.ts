import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding: 2.5rem;
  max-width: 74rem;
  margin: 0 auto 3rem;
  height: calc(100vh - 10rem);

  display: flex;
  flex-direction: column;

  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-800']};
`
