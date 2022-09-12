import { Box, Stack } from '@mui/material'
import React from 'react'
import Loader from './Loader';
import VideoCard from './VideoCard'

function Video({ videos }) {
  if(!videos?.length) return <Loader />;
  return (
    <Stack flexWrap="wrap" justifyContent="start" alignItems="start" gap={2} flexDirection='row'>
      {videos.map((item, id) => (
          <Box key={id}>
            <Loader />
            {item?.id?.videoId && <VideoCard video={item} />}
          </Box>
        ))}
    </Stack>
  )
}

export default Video