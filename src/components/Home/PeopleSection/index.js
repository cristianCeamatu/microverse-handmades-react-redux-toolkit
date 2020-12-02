// Styles
import { Container } from './PeopleSection.styled';

const PeopleSection = () => (
  <Container>
    <div className="details">
      <p>Learn from real life stories</p>
      <h3>Check how other Crafters succeeded</h3>
    </div>

    <div className="articles">
      <article>
        <img
          src="http://placekitten.com/40/40"
          alt="Kitten"
          width="40"
          height="40"
        />
        <h4>John Doe</h4>
        <p className="username">@johnDoe</p>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </article>

      <article>
        <img
          src="http://placekitten.com/40/40"
          alt="Kitten"
          width="40"
          height="40"
        />
        <h4>John Doe</h4>
        <p className="username">@johnDoe</p>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </article>
    </div>
  </Container>
);

export default PeopleSection;
