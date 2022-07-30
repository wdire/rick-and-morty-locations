import { gql, useLazyQuery, useQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
        }
        created
      }
    }
  }
`;

/**
 * Pagination info
 * @typedef {Object} Info
 * @property {number} count - The length of the response
 * @property {number} pages - The amount of pages
 * @property {number} next - Number of the next page (if it exists)
 * @property {number} prev - Number of the previous page (if it exists)
 */

/**
 * Filter
 * @typedef {Object} FilterLocation
 * @property {string} name - Filter by name
 * @property {string} type - Filter by type
 * @property {string} dimension - Filter by dimension
 */

/**
 * Location
 * @typedef {Object} Location
 * @property {string} id
 * @property {string} name
 * @property {string} type
 * @property {string} dimension
 * @property {string} residents
 * @property {string} created
 */

/**
 * Locations
 * @typedef {Object} Locations
 * @property {Info} info
 * @property {Array.<Location>} results
 */

/**
 * Locations Response
 * @typedef {Object} LocationsResponse
 * @property {Locations} data
 * @property {boolean} loading
 * @property {import("@apollo/client").LazyQueryExecFunction} getData
 */

/**
 *
 * @param {Object} props
 * @param {number} props.page - Which page to fetch
 * @param {FilterLocation} props.filter - Filtering the response
 * @returns {LocationsResponse}
 */

export const useGetLocations = ({ page, filter }) => {
  const [getData, { data, loading }] = useLazyQuery(GET_LOCATIONS, {
    variables: {
      page: page,
      filter: filter,
    },
  });

  return { data: data?.locations, loading, getData };
};
