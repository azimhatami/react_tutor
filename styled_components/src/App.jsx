import styled from 'styled-components';

const Div = styled.div`
  background-color: #fefbd8;
  height: 100vh;
  padding: 1rem;
  @media (min-width: 1000px) {
    background-color: #2e2e2e;
    color: #eee
  };
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: gray;
  &:hover {
    color: green;
  }
`;


function App() {

  return (
    <>
      <Div>
        <Title>Styled Components</Title>
        <Description>This is a text for test!!!</Description>
      </Div>
    </>
  )
}

export default App
