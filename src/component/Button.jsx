import propTypes from "prop-types";

const Button = (props) => {
  return (
    <a href="#" >
      <img src={props.source} className="w-11" />
    </a>
  );
};

Button.propTypes = {
  source: propTypes.string,
};

export default Button;
