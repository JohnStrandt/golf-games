/* eslint-disable react/prop-types */

const NavButton = ({ label }) => {
  return (
    <button className="w-1/3 h-12 bg-base border border-primary text-primary rounded-lg">
      {label}
    </button>
  );
};

export default NavButton;
