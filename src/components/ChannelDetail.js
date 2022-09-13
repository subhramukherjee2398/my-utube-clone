import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchDataFromApi } from '../utils/FetchDataFromApi'
import ChannelCard from './ChannelCard'
import Video from './Video'


function ChannelDetail() {
  const [channelInfo,SetchannelInfo] = useState(null)
  const [videos,Setvideos] = useState(null)
  const {id}  = useParams()

  useEffect(()=>{
    FetchChannelDeatils();
  },[id])

  const FetchChannelDeatils = async() =>{
    const data = await FetchDataFromApi(`channels?part=snippet&id=${id}`);

    SetchannelInfo(data?.items[0]);

      const videosData = await FetchDataFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      Setvideos(videosData?.items);
} 
  
  return (
    <Box minHeight="95vh">
    <Box>
      <div style={{
        height:'250px',
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
      }} />
      <ChannelCard channelDetail={channelInfo} marginTop="-93px" />
    </Box>
    <Box p={1} display="flex">
    <Box sx={{ mr: { sm: '100px' } }}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      <Video videos={videos} />
    </Box>
  </Box>
  )
}

export default ChannelDetail