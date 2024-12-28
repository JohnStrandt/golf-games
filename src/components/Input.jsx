/* eslint-disable react/prop-types */

const Input = ({ label }) => {
  return (
    <div className="flex w-full justify-center overflow-hidden">
      <label className="flex w-20 my-auto text-gray-800 dark:text-white">
        {label}
      </label>
      <input
        type="text"
        className="block w-full p-2 text-gray-600 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></input>
    </div>
  );
};

export default Input;
