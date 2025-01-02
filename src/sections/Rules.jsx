const Rules = () => {
  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] overflow-auto justify-around bg-background text-primary">
      <h1 className="text-center text-xl font-bold">Wolf</h1>

      <div>
        <h2 className="text-lg mb-2">Order of Play</h2>
        <p className="mb-3">
          You first have to determine the teeing order (your choice on the
          method). This order doesn’t change. Player A always follows B, and C
          always follows B, etc...
        </p>
        <p>
          The Wolf tees off first, and the role of wolf rotates every hole. So
          if player A is the first wolf, B is second, C is third, and so on.
          However, on the 17th and 18th holes, the players that are behind in
          points are allowed to be Wolf.
        </p>
      </div>
      <div>
        <h2 className="text-lg mb-2">Scoring</h2>
        <div className="pl-3">
          <ul className="list-disc">
            <li>Better Ball format</li>
            <li>Wolf picks a partner and they win, they each get 1 point</li>
            <li>
              Wolf picks a partner and they lose, opponents each get 1 point
            </li>
            <li>Lone Wolf wins: get 6 points (double points)</li>
            <li>Lone Wolf loses, others each get 2 points</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Rules;
