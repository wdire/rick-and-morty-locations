import { useRouter } from "next/router";
import { useGetResidentsByLocation } from "../hooks/locations/useGetResidentsByLocation";
import Loading from "./Loading";
import ResidentItem from "./ResidentItem";

const ResidentsList = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data: residents, loading } = useGetResidentsByLocation({
    id: id,
  });

  return (
    <>
      <div className="text-white text-2xl pb-1 z-20 relative text-center">
        {residents && residents[0]?.location?.name}
      </div>
      {loading && (
        <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
          <Loading />
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-3 relative z-20 pt-2 px-5 pb-7">
        {residents?.map((character, index) => {
          return (
            <ResidentItem key={"resident_" + index} character={character} />
          );
        })}
      </div>
    </>
  );
};

export default ResidentsList;
