import styled from 'styled-components'

export const HistoryContainer = styled.main`
  padding: 3.5rem;

  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  margin-top: 2rem;

  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    min-width: 600px;

    border-collapse: collapse;

    th {
      padding: 1rem;

      text-align: left;

      line-height: 1.6;
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-100']};
      background-color: ${(props) => props.theme['gray-600']};

      &:first-child {
        padding-left: 1.5rem;

        border-top-left-radius: 8px;
      }

      &:last-child {
        padding-right: 1.5rem;

        border-top-right-radius: 8px;
      }
    }

    td {
      padding: 1rem;

      line-height: 1.6;
      font-size: 0.875rem;
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  red: 'red-500',
  green: 'green-500',
  yellow: 'yellow-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  gap: 0.5rem;
  display: flex;
  align-items: center;

  &::before {
    width: 0.5rem;
    height: 0.5rem;

    content: '';
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
