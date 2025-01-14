/* eslint-disable react/prop-types */

const HoleNumber = ({ hole }) => {
  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full mx-auto bg-accent text-background">
      <span className=" text-5xl font-medium">{hole}</span>
    </div>
  );
};

export default HoleNumber;
