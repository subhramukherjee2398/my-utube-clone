import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FetchDataFromApi } from '../utils/FetchDataFromApi';
import Video from './Video';
import { useParams } from 'react-router-dom'
function VideoDetail() {
  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    FetchDataFromApiforVideo();
  }, [id])

  const FetchDataFromApiforVideo = async () => {
    console.log('call', id)
    FetchDataFromApi(`videos?part=snippet,statistics&id=${id}`).then((ele) => setVideoDetail(ele.items[0])).catch((e) => console.warn(e))
    FetchDataFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((ele) => setVideos(ele.items)).catch((e) => console.warn(e))
  }


  console.log(videoDetail);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >

              <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                {videoDetail?.snippet?.channelTitle}
                <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
              </Typography>

              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.snippet?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.snippet?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={1} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Video videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail