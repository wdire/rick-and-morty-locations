import classNames from "classnames";
import { useState } from "react";
import { useGetLocations } from "../hooks/locations/useGetLocations";
import LocationsItem from "./LocationItem";

const LocationsList = () => {
  const [page, setPage] = useState(1);
  const locations = useGetLocations({ page: page });

  const mainContainer = classNames(
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20",
    "w-full sm:w-[640px] lg:w-[840px] xl:w-[940px]"
  );

  const mainTable = classNames(
    "bg-slate-600/60 border-white/20 border-2 border-solid rounded-xl shadow-sm",
    "w-full overflow-scroll border-collapse"
  );

  return (
    <>
      {/* TODO; Add Title */}
      <div className={mainContainer}>
        <div className={mainTable}>
          <table className="w-full">
            <thead className="table w-full">
              <tr className="bg-green-700 text-left">
                <th>Name</th>
                <th>Type</th>
                <th>Dimension</th>
                <th>Residents Count</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="block h-[350px] max-h-full overflow-y-scroll">
              {locations?.results?.map((location) => {
                return (
                  <LocationsItem
                    key={"location_" + location?.id}
                    location={location}
                  ></LocationsItem>
                );
              })}

              {/* TODO; Add Loading */}
            </tbody>
          </table>
        </div>
        <div>{/* TODO; Add Pagination */}</div>
      </div>
    </>
  );
};

export default LocationsList;
