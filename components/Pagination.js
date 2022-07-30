/**
 *
 * @param {Object} props - Component props
 * @param {import("../hooks/locations/useGetLocations").Info} props.info
 * @param {number} props.currentPage
 * @param {Function} props.onClick
 */

const Pagination = ({ info, currentPage, onClick }) => {
  return (
    <>
      <div className="flex mt-5 justify-center">
        {Array.from({ length: info?.pages }, (v, i) => i + 1).map((page) => {
          return (
            <div
              key={"pagination_item " + page}
              className={
                "pagination-item" + (currentPage === page ? " active" : "")
              }
              onClick={() => onClick(page)}
            >
              {page}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
