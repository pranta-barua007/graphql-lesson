import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;