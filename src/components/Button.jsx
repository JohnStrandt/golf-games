/* eslint-disable react/prop-types */

const Button = ({ label }) => {
  return (
    <button className="w-4/5 h-12 border-2 border-accent text-accent rounded-lg">
      {label}
    </button>
  );
};

export default Button;
