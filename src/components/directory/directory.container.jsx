import React from "react";
import Directory from "./directory.component";
import Spinner from "../spinner/spinner.component";
import { useQuery } from "@apollo/client";
import { GET_DIRECTORY_SECTIONS } from "../../client/directory/directory.queries";

const DirectoryContainer = () => {
    const { loading, data } = useQuery(GET_DIRECTORY_SECTIONS);
    if(loading) return <Spinner />
    return <Directory sections={data.directorySections.sections} />
}

export default DirectoryContainer;