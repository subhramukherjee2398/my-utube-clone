
import { Box } from "@mui/system";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import SearchFeed from "./components/SearchFeed";
import Navbar from "./components/Navbar"; */

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
