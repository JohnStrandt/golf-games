const Rules = () => {
  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] overflow-auto bg-background text-primary">
      <h1 className="mt-4 mb-10 text-center text-3xl font-normal">Wolf</h1>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Order of Play</h2>
        <p className="mb-2">
          You first have to determine the teeing order (your choice on the
          method). This order doesn’t change. The role of wolf rotates on each
          hole, and the wolf always has the honors.
          <br />
          <br />
          <span className="font-bold">Holes 17 and 18: </span>Everyone has been
          wolf four times and there are two holes left. The players that are
          behind in points become the wolf.
          <br />
          <br />
          The app always displays the correct teeing order when players are on
          the tee box and the wolf is choosing on partner.
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
                <span className="text-lg">Ties</span>
                <br />
                Zero points for ties.
              </li>
              <li>
                <span className="text-lg">Partners</span>
                <br />
                Winning side shares two points.
              </li>
              <li>
                <span className="text-lg">Lone Wolf</span>
                <br />
                Winning side shares six points.
              </li>
              <li>
                <span className="text-lg">Blind Wolf</span>
                <br />
                Winning side shares nine points.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
