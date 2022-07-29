const LocationsItem = ({ location }) => {
  return (
    <>
      <tr className="cursor-pointer group hover:bg-slate-200/10 transition-colors duration-300">
        <td>{location?.name}</td>
        <td>{location?.type}</td>
        <td>{location?.dimension}</td>
        <td>{location?.residents?.length}</td>
        <td className=" group-hover:text-green-600 transition-colors duration-300">
          <div className="text-xl scale-150 ">&#187;</div>
        </td>
      </tr>
    </>
  );
};

export default LocationsItem;
