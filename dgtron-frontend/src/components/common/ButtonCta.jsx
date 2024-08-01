import PropTypes from "prop-types";

const ButtonCta = ({ label }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-primaryFont text-lg leading-none rounded-full text-white bg-dgt-green border-dgt-green">
      {label}
    </button>
  );
};

ButtonCta.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ButtonCta;
