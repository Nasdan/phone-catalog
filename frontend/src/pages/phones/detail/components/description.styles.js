import { css } from 'emotion';
import { breakpoints } from '../../../../common/styles/breakpoints';

export const container = css`
  display: flex;
  flex-direction: column;
  margin: 2rem;

   @media (min-width: ${breakpoints.medium}) {
      flex-basis: 40%;
      margin: 0;
      margin-left: 2rem;
    }
  }
`;

export const title = css`
  font-size: 2.2rem;
  font-weight: 500;
  margin: 0;
`;

export const getCircleByColor = color => css`
  display: flex;
  align-items: center;

  & ::after {
    content: ' ';
    width: 2rem;
    height: 2rem;
    background-color: ${color};
    border-radius: 50%;
    border-color: #ccc;
    border-width: 0.05px;
    border-style: solid;
    margin-left: 1rem;
  }
`;

export const description = css`
  white-space: pre-wrap;
`;

export const price = css`
  align-self: flex-end;
  font-size: 2.5rem;
`;
