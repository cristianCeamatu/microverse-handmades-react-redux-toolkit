import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Assets
import background from '../assets/showcase.jpg';
// Styles
const Container = styled.section`
  background: url(${background});
  background-position: center 53%;
  padding: 60px 15px;
  text-align: center;
  color: #fff;
  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
`;

export const Button = styled(Link)`
  border-radius: 50px;
  padding: 5px 20px;
  background: rgb(233, 84, 6);
  margin-right: 10px;
  font-size: 0.75rem;
  color: #fff;
  text-transform: uppercase;
`;

const StartFreeSection = () => {
  return (
    <Container>
      <h3>Be everywhere at home!</h3>
      <Button to="/sign_up">Start free</Button>
    </Container>
  );
};

export default StartFreeSection;
