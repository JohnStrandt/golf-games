const Rules = () => {
  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] overflow-auto bg-background text-primary">
      <div className="mt-4 mb-8 text-center">
        <h1 className="text-3xl pb-1">Wolf</h1>
        <p className="text-center">Better-Ball format</p>
      </div>

      <h2 className="text-lg text-center mb-2">Order of Play</h2>
      <div className="space-y-4 mb-8">
        <p>
          You first have to determine the teeing order (your choice on the
          method). This order doesn’t change. The role of wolf rotates on each
          hole, and the wolf always has the honors.
        </p>
        <p>
          <span className="font-semibold">Holes 17 and 18: </span>Everyone has
          been wolf four times and there are two holes left. The player in last
          place is made the wolf on the following hole. If there is a tie for
          last place, a random (last place) player is chosen as wolf. So pay
          attention!
        </p>
        <p>
          The app always displays the correct teeing order when players are on
          the tee box and the wolf is choosing to partner or go solo.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg text-center mb-2">Scoring</h2>
        <ul className="space-y-2">
          <li>
            Ties
            <ol className="ps-4 list-inside">
              <li>Zero points for ties</li>
            </ol>
          </li>

          <li>
            Partners
            <ol className="ps-4 list-inside">
              <li>Winning side share two points</li>
              <li>
                Wolf needs to decide if they want someone as a partner before
                the next guy hits.
              </li>
            </ol>
          </li>

          <li>
            Lone Wolf
            <ol className="ps-4 list-inside">
              <li>Points double</li>
              <li>Winning side share six points</li>
              <li>Can be called at any time on the tee box.</li>
            </ol>
          </li>

          <li>
            Blind Wolf
            <ol className="ps-4 list-inside">
              <li>Points triple</li>
              <li>Winning side share nine points</li>
              <li>Must be called before ANYONE hits!</li>
            </ol>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Rules;
