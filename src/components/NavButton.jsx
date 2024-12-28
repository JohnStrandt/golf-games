/* eslint-disable react/prop-types */

const NavButton = ({ label }) => {
  return (
    <button className="w-1/2 h-14 bg-cyan-300 text-white rounded-lg">
      {label}
    </button>
  );
};

export default NavButton;
