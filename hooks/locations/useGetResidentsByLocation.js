import { gql, useQuery } from "@apollo/client";

const GET_RESIDENTS_BY_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      residents {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
          created
        }
        location {
          id
          name
          type
          dimension
          created
        }
        image
        created
      }
    }
  }
`;

/**
 * Character
 * @typedef {Object} Character
 * @property {string} id
 * @property {string} name
 * @property {string} status
 * @property {string} species
 * @property {string} type
 * @property {string} gender
 * @property {import("./useGetLocations").Location} origin
 * @property {import("./useGetLocations").Location} location
 * @property {string} image
 * @property {string} created
 */
/**
 * Residents Response
 * @typedef {Object} ResidentsResponse
 * @property {Array.<Character>} data
 * @property {boolean} loading
 */

/**
 *
 * @param {Object} props
 * @param {number} props.id - Location id to fetch
 * @returns {ResidentsResponse}
 */

export const useGetResidentsByLocation = ({ id }) => {
  const { data, loading } = useQuery(GET_RESIDENTS_BY_LOCATION, {
    variables: {
      id: id,
    },
  });

  return { data: data?.location?.residents, loading };
};
