import styled from 'react-emotion';

const StyledBody = styled.main`
  min-height: 100%;
  padding: 0;
  margin: 0;
  font-family: 'Helvetica Neue', 'Calibri Light', Roboto, sans-serif;
  text-align: center;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  > * {
    grid-column: 2;
  }
  @media (max-width: 769px) {
    grid-template-columns: 0.2fr 1fr 0.2fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    > * {
      grid-column: 1;
    }
  }
`;

export default StyledBody;
