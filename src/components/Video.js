import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'

function Video({ videos }) {
  return (
    <Stack flexWrap="wrap" justifyContent="start" alignItems="start" gap={2} flexDirection='row'>
      {videos.map((item, id) => (
        <Box key={id}>
          {item?.id?.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Video