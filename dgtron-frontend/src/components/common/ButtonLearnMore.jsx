import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const ButtonLearnMore = ({ label }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-primaryFont text-lg leading-none rounded-full text-slate-gray border-none">
      {label}
      <FaArrowRight />
    </button>
  );
};

ButtonLearnMore.propTypes = {
  label: PropTypes.string.isRequired,
};
export default ButtonLearnMore;
