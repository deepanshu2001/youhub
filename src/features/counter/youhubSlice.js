import { createSlice } from '@reduxjs/toolkit'
import { getHomePageVideos } from '../../app/reducers/getHomePageVideos'
import { getSearchPageVideos } from '../../app/reducers/getSearchPageVideos';
const initialState={
    videos:[],
    currentPlaying:null,
    searchTerm:"",
    searchResults:[],
    nextPageToken:null,
    recommendedVideo:null
}

export const youhubSlice=createSlice({
    name:'youhub',
    initialState,
    reducers:{
        clearVideos:(state)=>{
            state.videos=[];
            state.nextPageToken=null;
        },
        changeSearchTerm:(state,action)=>{
            state.searchTerm=action.payload
        },
        clearSearchTerm:(state)=>{
            state.searchTerm="";
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{
            if(action.payload && action.payload.parsedData){
                state.videos=action.payload.parsedData;
                state.nextPageToken=action.payload.nextPageToken
            }
        })

        builder.addCase(getSearchPageVideos.fulfilled,(state,action)=>{
            if(action.payload && action.payload.parsedData){
                state.videos=action.payload.parsedData;
                state.nextPageToken=action.payload.nextPageToken
            }
        })
    }
})
export const {clearVideos,changeSearchTerm,clearSearchTerm}=youhubSlice.actions
export default youhubSlice.reducer;
