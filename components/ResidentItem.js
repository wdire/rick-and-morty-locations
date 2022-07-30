/**
 *
 * @param {object} props
 * @param {import("../hooks/locations/useGetResidentsByLocation").Character} props.character
 */

import classNames from "classnames";
import Image from "next/image";

const ResidentItem = ({ character }) => {
  const itemClass = classNames(
    "rounded-md overflow-hidden bg-slate-600/80 relative text-sm sm:text-md",
    window.innerWidth < 640 ? "sm:w-52 w-40" : "w-52"
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
