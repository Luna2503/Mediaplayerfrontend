import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";
import Category from "../components/Category";

//1. upload video

export const uploadvideo=async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/videos`,reqBody)
}

//2.get all videos
export const getAllVideos=async()=>
{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}
//3) delete video

export const deleteVideo =async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//4)add to watch history 

export const addToHistory=async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//5)get all watch history
export const getAllWatchHistory = async() =>{
    return await commonAPI('GET',`${serverURL}/history`,"")
 }

//6 delete watch history
export const deleteWatchHistory=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}
//7)add category
export const addCategory=async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/category`,reqBody)
}

//8)get all category
export const getAllCategory = async() =>{
    return await commonAPI('GET',`${serverURL}/category`,"")
 }
 //9)delete Category
 export const deleteCategory=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}