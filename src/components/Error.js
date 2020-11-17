import Proptypes from 'prop-types';
const Error = ({ errors }) => {
  return (
    <div>
      {errors.map((error, i) => (
        <p key={`${error}${i}`}>{error}</p>
      ))}
    </div>
  );
};

Error.propTypes = {
  errors: Proptypes.arrayOf(Proptypes.any).isRequired,
};

export default Error;
