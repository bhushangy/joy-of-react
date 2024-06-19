import styled from 'styled-components';
import Button from './Button';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <Div>
      <Button>Click me</Button>
    </Div>
  );
}

export default App;
