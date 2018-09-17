import { css } from 'emotion';
import { breakpoints } from '../../../../common/styles/breakpoints';

const maxItemsPerRow = 4;

export const list = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0;
`;

export const item = css`
  padding: 2rem;
  box-sizing: border-box;
  flex-basis: 100%;

  @media (min-width: ${breakpoints.medium}) {
      flex-basis: 50%;
    }
  }

  @media (min-width: ${breakpoints.large}) {
     flex-basis: ${100 / maxItemsPerRow}%;
    }
  }
`;
