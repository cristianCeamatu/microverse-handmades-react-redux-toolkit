import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// Assets
import logo from '../../../assets/logo.png';
// Styles
import { Container, Logo } from './Footer.styled';

const Footer = () => {
  return (
    <Container>
      <Logo to="/">
        <img src={logo} alt="Company brand logo" width="100" />
        Crafts
      </Logo>

      <address>
        Lafayette Ave 156, Brooklyn, NY, USA
        <br />
        35 St ANdrew's St, Cambridge CB2 3AR, Grat Britain
        <br />+ 347 853 106 681
      </address>

      <ul>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>

      <p>Crafts 2020, All rights reserved</p>
    </Container>
  );
};

export default Footer;
