import { useEffect, Dispatch, SetStateAction } from "react";
import { PEXELES_API } from "../utils/pexels";
import { createClient } from "pexels";
import { VideoApiResponse } from "../context/App.context";
import { Video } from "pexels";

const client = createClient(PEXELES_API);

const fetchVideos = async (query: string, setVideos: Dispatch<SetStateAction<VideoApiResponse>>) => {
    try {
        const response = await client.videos.search({
            query,
            per_page: 44,
        });

        if ('videos' in response) {
            const mappedVideos: Video[] = response.videos.map((video: any) => ({
                ...video,
                avg_color: video.avg_color || '',
            }));
            setVideos({
                videos: mappedVideos,
                page: response.page,
                per_page: response.per_page,
                total_results: response.total_results,
                next_page: response.next_page.toString(),
                url: response.url || ''
            });
        } else {
            console.log('Error fetching videos:', response);
        }
    } catch (error) {
        console.log('there was an error fetching videos' + error);
    }
};

export const useFetchVideos = (query: string, setVideos: React.Dispatch<React.SetStateAction<VideoApiResponse>>) => {
    useEffect(() => {
        query && fetchVideos(query, setVideos);
    }, [query]);
};