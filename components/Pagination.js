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
        <div
          key={"pagination_item_prev"}
          className={"pagination-item" + (!info?.prev ? " disabled" : "")}
          onClick={() => info?.prev && onClick(info?.prev)}
        >
          &#60;
        </div>
        {Array.from({ length: info?.pages }, (v, i) => i + 1).map((page) => {
          return (
            <div
              key={"pagination_item_" + page}
              className={
                "pagination-item" + (currentPage === page ? " active" : "")
              }
              onClick={() => onClick(page)}
            >
              {page}
            </div>
          );
        })}
        <div
          key={"pagination_item_next"}
          className={"pagination-item" + (!info?.next ? " disabled" : "")}
          onClick={() => info?.next && onClick(info?.next)}
        >
          &#62;
        </div>
      </div>
    </>
  );
};

export default Pagination;
