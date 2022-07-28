import { useState } from "react";
import { useGetLocations } from "../hooks/locations/useGetLocations";

const LocationsList = () => {
  const [page, setPage] = useState(1);
  const locations = useGetLocations({ page: page });

  console.log(locations);

  return <>Hello there</>;
};

export default LocationsList;
