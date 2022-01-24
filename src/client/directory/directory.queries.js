import { gql } from "@apollo/client";

export const GET_DIRECTORY_SECTIONS = gql`
  query getDirectorySections {
    directorySections @client {
      sections {
        title
        imageUrl
        id
        linkUrl  
      }
    }
  }
`;