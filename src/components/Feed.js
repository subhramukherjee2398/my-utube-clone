import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FetchDataFromApi } from '../utils/FetchDataFromApi';
import { Sidebar, Video } from './'

function Feed() {
  const [videos, Setvideos] = useState([]);
  const [selectedCategory, SetselectedCategory] = useState('New')

  useEffect(() => {
    Setvideos(null)
    FetchDataFromApi(`search?part=snippet&q=${selectedCategory}`).then((res) => {
      Setvideos(res.items)
    }).catch((e) => console.warn(e))

  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} SetselectedCategory={SetselectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 Smukherjee
        </Typography>

      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          New <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
      </Box>
      <Video videos={videos} />
    </Stack>
  )
}

export default Feed                                                                    