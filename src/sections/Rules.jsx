const Rules = () => {
  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] overflow-auto bg-background text-primary">
      <h1 className="mt-4 mb-10 text-center text-xl font-bold">Wolf</h1>

      <div className="mb-8">
        <h2 className="text-lg mb-2">Order of Play</h2>
        <p className="mb-2">
          You first have to determine the teeing order (your choice on the
          method). This order doesn’t change. Player A always follows B, and C
          always follows B, etc...
        </p>
        <p>
          The role of wolf rotates on each consecutive hole, and the wolf always
          has the honors. So if player A is the wolf on the first hole, B hits
          second, C hits third, etc... On the next tee, player B is now the wolf
          and hits first, C hits second, D third, and so on... However, on the
          17th and 18th holes, the players that are behind in points are allowed
          to be Wolf. Always maintaining the same hitting order.
        </p>
      </div>
      <div>
        <div className="mb-8">
          <h2 className="text-lg mb-2">Wolf Selects Partner</h2>
          <p>
            The wolf can choose to go it alone at any point of the tee sequence.
            Either before he hits after he hits, or after everyone hits.
            Doesn&apos;t matter. However, if you want to choose a playing
            partner, you need to do so before the next player hits their tee
            shot.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg mb-2">Scoring</h2>
          <div className="pl-3">
            <ul className="list-disc">
              <li>Better Ball format</li>
              <li>
                Wolf and partner win: They win a point each and their opponents
                lose a point.
              </li>
              <li>
                Wolf and partner lose: They lose a point, and opponents win a
                point.
              </li>
              <li>
                Lone Wolf wins: Wolf wins six points, and the opponents each
                lose two points
              </li>
              <li>
                Lone Wolf loses: Wolf loses six points, and the opponents get
                two points each.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
