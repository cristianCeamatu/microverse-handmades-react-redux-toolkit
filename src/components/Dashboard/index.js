// Components
import AddProductForm from '../Products/AddProductForm';
import MobileLayout from '../Layout/MobileLayout';
// Styles
import { MobileContainer } from '../Styles.styled';

const Dashboard = () => (
  <MobileLayout title="Dashboard" productPage={false}>
    <MobileContainer>
      <div className="wrapper">
        <header>
          <h1>Add a craft</h1>
          <p>Ready to share your next creation with the world?</p>
        </header>

        <AddProductForm />
      </div>
    </MobileContainer>
  </MobileLayout>
);

export default Dashboard;
