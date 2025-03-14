/* eslint-disable react/prop-types */

export const WideButton = ({ label, action }) => {
  return (
    <button
      className="w-4/5 h-12 bg-base outline-none border border-primary text-accent rounded-lg"
      onClick={action}
    >
      {label}
    </button>
  );
};

export const NavButton = ({ label, action }) => {
  return (
    <button
      onClick={action}
      className="w-1/3 h-12 outline-none bg-base border border-primary text-primary rounded-lg"
    >
      {label}
    </button>
  );
};

export const AccentButton = ({ label, action, disabled }) => {
  return (
    <button
      className="w-3/5 h-14 bg-base outline-none border border-primary text-accent text-lg rounded-full"
      onClick={action}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
