// Styles
import { DashboardContainer, Button } from './DashboardSection.styled';
// Assets
import dashboard from '../../assets/dashboard-section.png';

const DashboardSection = () => {
  return (
    <DashboardContainer>
      <header>
        <p>We provide all the tools you need</p>
        <h2>Manage everything from the comfort of your home</h2>
      </header>

      <div className="image">
        <img src={dashboard} alt="Dashboard" />
      </div>

      <div className="details">
        <h3>All stats at your fingertips at any time</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button to="/login">Dashboard</Button>
      </div>
    </DashboardContainer>
  );
};

export default DashboardSection;
