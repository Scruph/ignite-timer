import styled from 'styled-components'

export const FormContainer = styled.header`
  width: 100%;

  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme['gray-100']};
`

const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;

  border: 0;
  font-weight: bold;
  font-size: 1.125rem;
  background-color: transparent;
  color: ${(props) => props.theme['gray-100']};
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  :focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
