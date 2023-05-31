import PropTypes from "prop-types";
// import "./styles.css";

export const FirstApp = ({
  title,
  subTitle,
  // = 'This is a default prop!'
  name,
}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: "Peter Griffin",
  subTitle: "There is no subtitle",
  title: "There is no title",
};
