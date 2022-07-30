import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useGetLocations } from "../hooks/locations/useGetLocations";
import Loading from "./Loading";
import LocationsItem from "./LocationItem";
import Pagination from "./Pagination";

const LocationsList = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [info, setInfo] = useState({});
  const routeChecked = useRef(false);
  const {
    data: locations,
    loading,
    getData: getLocations,
  } = useGetLocations({
    page: currentPage,
  });

  useEffect(() => {
    if (routeChecked) {
      getLocations();
    }

    //If "page" on the url is greater than the total pages
    if (currentPage > 1 && locations?.info?.pages === null) {
      router.replace("/");
    }

    if (locations?.info) {
      setInfo(locations?.info);
    }
  }, [locations, routeChecked, getLocations]);

  useEffect(() => {
    if (router.query?.page && Array.isArray(router.query?.page)) {
      const pageSplit = router.query?.page[0].split("=");

      if (
        pageSplit.length === 2 &&
        pageSplit[0] === "page" &&
        !isNaN(pageSplit[1])
      ) {
        const queryPage = Number(pageSplit[1]);

        if (0 >= queryPage) {
          router.replace("/");
          return;
        }

        setCurrentPage(queryPage);
        routeChecked.current = true;
      } else {
        router.replace("/");
      }
    } else {
      setCurrentPage(1);
    }
  }, [router]);

  const mainContainer = classNames(
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-1",
    "w-full sm:w-[640px] lg:w-[840px] xl:w-[940px]"
  );

  const mainTable = classNames(
    "bg-slate-600/60 border-white/20 border-2 border-solid rounded-xl shadow-sm",
    "w-full border-collapse"
  );

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
    router.push("/page=" + page);
  };

  return (
    <>
      <div className={mainContainer}>
        <div className="text-white text-2xl pb-1">Locations</div>
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
            <tbody className="relative block h-[350px] max-h-full overflow-y-scroll">
              {!loading &&
                locations?.results?.map((location) => {
                  return (
                    <LocationsItem
                      key={"location_" + location?.id}
                      location={location}
                    ></LocationsItem>
                  );
                })}
            </tbody>
          </table>
          {loading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Loading />
            </div>
          )}
        </div>
        <div>
          <Pagination
            info={info}
            currentPage={currentPage}
            onClick={handlePaginationClick}
          />
        </div>
      </div>
    </>
  );
};

export default LocationsList;
