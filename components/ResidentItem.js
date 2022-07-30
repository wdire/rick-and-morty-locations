/**
 *
 * @param {object} props
 * @param {import("../hooks/locations/useGetResidentsByLocation").Character} props.character
 */

const ResidentItem = ({ character }) => {
  return (
    <div className="rounded-md overflow-hidden bg-slate-600/80 w-52">
      <img
        src={character?.image}
        alt={character?.name}
        className="w-52 h-44 object-cover"
      />
      <div className="text-white p-3">
        <div className="text-lg font-bold">{character?.name}</div>
        <div>
          {character?.gender && character?.gender} -{" "}
          {character?.species && character?.species}
        </div>

        {character?.type && (
          <div>
            <div className="text-zinc-300 pt-1">Type:</div> {character?.type}
          </div>
        )}
        {character?.origin?.type && (
          <div>
            <div className="text-zinc-300 pt-1">Origin:</div>
            {character?.origin?.type}, {character?.origin?.dimension}
          </div>
        )}
        {}
      </div>
    </div>
  );
};

export default ResidentItem;
