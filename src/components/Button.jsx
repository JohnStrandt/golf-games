/* eslint-disable react/prop-types */

const Button = ({ label }) => {
  return (
    <button className="w-4/5 h-16 bg-cyan-300 text-white rounded-lg">
      {label}
    </button>
  );
};

export default Button;
