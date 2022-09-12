import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
/* import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "./utils/constants";
 */
function VideoCard({ video: { id: { videoId }, snippet } }) {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
            <CardMedia image={snippet?.thumbnails?.high?.url || "demoThumbnailUrl"} alt={snippet?.title}
                sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
            />
            <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>

                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0, 60) || "demoVideoTitle".slice(0, 60)}
                </Typography>


                <Typography variant="subtitle2" color="gray">
                    {snippet?.channelTitle || "demoChannelTitle"}
                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>

            </CardContent>
        </Card>
    )
}

export default VideoCard