import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FetchDataFromApi } from '../utils/FetchDataFromApi';

function VideoDetail() {
  const id = useState('');

  useEffect(()=>{
   FetchDataFromApiforVideo();
     
  },[id])

  const FetchDataFromApiforVideo  = async() =>{
    FetchDataFromApi(`videos?part=snippet,statistics&id=${id}`).then((ele)=>console.log(ele))
    FetchDataFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((ele)=>console.log(ele))
 }

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer  className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                 
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                   views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
        
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail