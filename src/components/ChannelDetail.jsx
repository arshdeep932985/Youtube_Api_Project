import React from 'react'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {Videos,ChannelCard} from './'
import { fetchFromApi } from '../utils/fetchFromAPI'
const ChannelDetail = () => {
  const {id}=useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
console.log(channelDetail,videos)
  useEffect(()=>{
  fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=>(setChannelDetail(data.items[0])))
  fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))
  },[id])
  return (
    <Box minheight="95vh" >
<Box >
  <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(159,56,157,1) 0%, rgba(0,212,255,1) 100%)' , zIndex:10, height:'300px'}} />
  <ChannelCard channelDetail={channelDetail} marginTop='-110px' marginLeft='41vw'/>
</Box>
<Box display='flex' p="2" >
<Box sx={{mr:{sm:'130px'}}}/>
  <Videos videos={videos}/>

</Box>
    </Box>
  )
}

export default ChannelDetail
