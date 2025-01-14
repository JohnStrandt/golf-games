//
//  TODO:  Simplify the Order of Play section
//
const Rules = () => {
  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] overflow-auto bg-background text-primary">
      <h1 className="mt-4 mb-10 text-center text-3xl font-normal">Wolf</h1>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Order of Play</h2>
        <p className="mb-2">
          You first have to determine the teeing order (your choice on the
          method). This order doesn’t change. Player-2 always follows Player-1,
          and 3 always follows 2, etc...
          <br />
          The role of wolf rotates on each consecutive hole, and the wolf always
          has the honors. So if Player-1 is the wolf on the first hole, 2 hits
          second, 3 hits third, etc... On the next tee, Player-2 is now the wolf
          and hits first, 3 hits second, 4 third, and so on...
          <br />
          However, on the 17th and 18th holes, the players that are behind in
          points are allowed to be Wolf. Always maintaining the same hitting
          order.
          <br />
          In the app, the players are always listed in the correct teeing order
          at the start of each hole.
        </p>
      </div>
      <div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Wolf Choices</h2>
          <div className="pl-3">
            <ul className="list-disc">
              <li>
                <span className="text-lg">Partners</span>
                <br />
                After one player hits their tee shot, the Wolf needs to decide
                if they want them as a partner before the next player hits their
                tee shot.
              </li>
              <li>
                <span className="text-lg">Lone Wolf </span>
                <span className="italic">Points Double</span>
                <br />
                Can be called at any time on the tee box.
              </li>
              <li>
                <span className="text-lg">Blind Wolf </span>
                <span className="italic">Points Triple</span>
                <br />
                Must be called before ANYONE hits!
                <br />
                You may decide not to implement this rule as it can be brutal.
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Scoring</h2>
          <div className="pl-3">
            <ul className="list-disc">
              <li>
                <span className="text-lg">Better Ball format</span>
                <br />
                Lowest score on each side is the one used.
              </li>
              <li>
                <span className="text-lg">Partners</span>
                <br />
                Winning side shares two points taken from the losing side.
              </li>
              <li>
                <span className="text-lg">Lone Wolf</span>
                <br />
                Winning side takes six points from losing the side.{" "}
              </li>
              <li>
                <span className="text-lg">Blind Wolf</span>
                <br />
                Winning side takes nine points from the losing side.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
