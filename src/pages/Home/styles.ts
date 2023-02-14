import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 100%;

  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form {
    gap: 3.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  padding: 1rem;

  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  font-weight: bold;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-700']};

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
