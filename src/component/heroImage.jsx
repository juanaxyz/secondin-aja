import propTypes from "prop-types";

const HeroImage = (props) => {
  return (
    <div
      className={`${props.customStyle} relative shadow-md rounded-lg bg-gradient-to-br from-gray-50  to-gray-500`}
    >
      <img
        src={props.src}
        className="object-cover rounded-lg size-full cursor-pointer"
        alt="Hero"
      ></img>
      <div className={`${props.customText}  flex  flex-col mb-10 text-white `}>
        <h1 className="font-Poppins font-extrabold text-3xl ">Title Product</h1>
        <a
          href="#"
          className="underline decoration-gray-500 font-Poppins text-sm decoration-2"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

HeroImage.propTypes = {
  customStyle: propTypes.string,
  src: propTypes.string.isRequired,
  customText: propTypes.string,
};

export default HeroImage;
