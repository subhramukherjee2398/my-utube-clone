import { Box, Stack } from '@mui/material'
import React from 'react'
import ChannelCard from './ChannelCard';
import Loader from './Loader';
import VideoCard from './VideoCard'

function Video({ videos }) {
  if(!videos?.length) return <Loader />;
  return (
    <Stack flexWrap="wrap" justifyContent="start" alignItems="start" gap={2} flexDirection='row'>
      {videos.map((item, id) => (
          <Box key={id}>
            {item?.id?.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item}  />}
          </Box>
        ))}
    </Stack>
  )
}

export default Video