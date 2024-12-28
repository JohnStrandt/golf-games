import { Input } from "../components";

const Setup = () => {
  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] justify-around bg-red-50 text-gray-800">
      <span className="flex w-full justify-center">Hello</span>

      <Input label="Player 1" />
      <Input label="Player 2" />
      <Input label="Player 3" />
      <Input label="Player 4" />
    </section>
  );
};

export default Setup;
