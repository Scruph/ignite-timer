import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-top: 3rem;
  padding-left: 8rem;

  button {
    padding-bottom: 1rem;
    border: none;
    background-color: transparent;

    :focus {
      box-shadow: none;
    }
  }
`
