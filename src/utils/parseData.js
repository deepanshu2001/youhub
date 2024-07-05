import React from 'react';
import {parseVideoDuration} from './parseVideoDuration';
import axios from 'axios';
import { timeSince } from './timeSince';
import { convertRawtoString } from './convertRawtoString'; // fixed typo

const API_KEY = process.env.REACT_APP_API_KEY;

export const parseData = async (items) => {
    console.log(items)
    try {
        const videoIds = [];
        const channelIds = [];
        items.forEach((item) => {
            channelIds.push(item.snippet.channelId);
            videoIds.push(item.id.videoId); // fixed typo
        });

        const {
            data: { items: channelsData }, // fixed typo
        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`);
        const parsedChannelsData = [];
        channelsData.forEach((channel) => parsedChannelsData.push({
            id: channel.id,
            image: channel.snippet.thumbnails.default.url,
        }));

        const {
            data: { items: videosData }, // fixed typo
        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`);
        const parsedData = [];
        items.forEach((item, index) => {
            const { image: channelImage } = parsedChannelsData.find((data) => data.id === item.snippet.channelId);
            console.log(videosData[0].contentDetails.duration)
            if (channelImage) {
                parsedData.push({
                    videoId: item.id.videoId, // fixed typo
                    videoTitle: item.snippet.title,
                    videoDescription: item.snippet.description,
                    videoThumbnail: item.snippet.thumbnails.medium.url,
                    videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                    videoDuration: parseVideoDuration(videosData[index].contentDetails.duration),
                    videoViews: convertRawtoString(videosData[index].statistics.viewCount),
                    videoAge: timeSince(new Date(item.snippet.publishedAt)), // fixed typo
                    channelInfo: {
                        id: item.snippet.channelId,
                        image: channelImage,
                        name: item.snippet.channelTitle
                    }
                });
            }
        });
        return parsedData;
    } catch (err) {
        console.log(err);
    }
};

export default parseData;
