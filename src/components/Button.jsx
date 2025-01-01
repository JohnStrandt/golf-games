/* eslint-disable react/prop-types */

const Button = ({ label }) => {
  return (
    <button className="w-4/5 h-12 bg-base border border-primary text-accent rounded-lg">
      {label}
    </button>
  );
};

export default Button;
