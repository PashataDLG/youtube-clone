import { useEffect } from "react";

export const useFetchVideos = (fetchVideos: (query: string) => void, query: string) => {
    useEffect(() => {
        fetchVideos(query);
    }, [fetchVideos, query]);
};