import { useEffect } from "react";
import { PEXELES_API } from "../utils/pexels";
import { createClient } from "pexels";

const client = createClient(PEXELES_API);

const fetchVideos = async (query: string) => {
    try {
        const response = await client.videos.search({
            query,
            per_page: 44,
        });

        console.log("response - " + response);
    } catch (error) {
        console.log('there was an error fetching videos' + error);
    }
};

export const useFetchVideos = (query: string) => {
    useEffect(() => {
        fetchVideos(query);
    }, [fetchVideos, query]);
};