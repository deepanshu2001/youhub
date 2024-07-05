import React from 'react'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import parseData from '../../utils/parseData';

const API_KEY=process.env.REACT_APP_API_KEY;

export const getHomePageVideos=createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext,{getState})=>{
        const{
            youhub:{nextPageToken:nextPageTokenFromState,videos},
        }=getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="Flying Beast"&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}`:""}`);
        const items=response.data.items;
        //apna result pane ke liye
        const parsedData=await parseData(items)

        return {parsedData:[...videos,...parsedData],nextPageToken:nextPageTokenFromState}
         
    }
)