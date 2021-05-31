import "../styles/globals.css";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8rem;
`;

function MyApp({ Component, pageProps }) {
  return (
    <AppContainer {...pageProps}>
      <Component />
    </AppContainer>
  );
}

export default MyApp;
