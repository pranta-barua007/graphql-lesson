import React from "react";
import { useQuery, gql } from "@apollo/client";

import CollectionPage from "./collection.component";
import Spinner from "../../components/spinner/spinner.component";

const GET_COLLECTIONS_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPageContainer = ({ match }) => {
  const { loading, data, error } = useQuery(GET_COLLECTIONS_BY_TITLE, {
    variables: { title: match.params.collectionId },
  });

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>
  return <CollectionPage collection={data.getCollectionsByTitle} />;
};

export default CollectionPageContainer;
