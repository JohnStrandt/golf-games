/* eslint-disable react/prop-types */

const CustomRadioButton = ({ id, label, checked, handleChange }) => {
  return (
    <div
      key={id}
      className="flex justify-center bg-base items-center w-full h-1/5 "
    >
      <input
        type="radio"
        id={id}
        value={id}
        name="wolfChoices"
        checked={checked}
        onChange={handleChange}
        className="hidden peer"
      />
      <label
        htmlFor={id}
        className="w-full h-full flex flex-col text-center justify-center peer-checked:text-accent border border-base peer-checked:border-accent"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomRadioButton;
