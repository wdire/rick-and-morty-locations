import classNames from "classnames";
import Image from "next/image";

/**
 *
 * @param {object} props
 * @param {import("../hooks/locations/useGetResidentsByLocation").Character} props.character
 */

const ResidentItem = ({ character }) => {
  const itemClass = classNames(
    "rounded-md overflow-hidden bg-slate-600/80 relative text-sm sm:text-md",
    window.innerWidth < 640 ? "sm:w-52 w-40" : "w-52"
  );

  const statusClass = classNames(
    "w-2 h-2 rounded-full inline-block mr-2",
    character?.status === "Alive"
      ? "bg-green-500"
      : character?.status === "Dead"
      ? "bg-red-500"
      : "bg-yellow-500"
  );

  return (
    <div className={itemClass}>
      <Image
        src={character?.image}
        alt={character?.name}
        className="object-cover max-w-full"
        width={window.innerWidth < 640 ? 160 : 208}
        height={window.innerWidth < 640 ? 130 : 176}
        layout="fixed"
      />
      <div className="text-white p-3">
        <div className="text-md sm:text-lg font-bold">{character?.name}</div>
        <div className="">
          <div className={statusClass}></div>
          <span>
            {character?.status} - {character?.species && character?.species},{" "}
            {character?.gender && character?.gender}
          </span>
        </div>

        {character?.type && (
          <div>
            <div className="text-zinc-300 pt-1 bg-yello">Type:</div>{" "}
            {character?.type}
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
