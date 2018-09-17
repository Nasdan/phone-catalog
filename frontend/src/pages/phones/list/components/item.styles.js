import { css } from 'emotion';

export const item = css`
  list-style: none;
`;

export const card = css`
  min-height: 20rem;
`;

export const cardContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const image = css`
  width: 100%;
  max-width: 18rem;
  height: auto;
  margin-bottom: 2rem;
  & img {
    max-width: 100%;
    min-width: 100%;
  }
`;

export const title = css`
  align-self: flex-end;
`;

export const price = css`
  align-self: flex-end;
`;
