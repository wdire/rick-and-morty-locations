import { gql, useQuery } from "@apollo/client";

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

export const useGetLocations = ({ page, filter }) => {
  const { data } = useQuery(GET_LOCATIONS, {
    variables: {
      page: page,
      filter: filter,
    },
  });

  return data?.locations;
};
