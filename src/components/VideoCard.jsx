import React from 'react'
import {Link} from 'react-router-dom'
import {Typography,Card,CardContent,CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle } from '../utils/constants'

function timeAgo(date) {
    const now = new Date();
    const past = new Date(date);
    const secondsPast = Math.floor((now - past) / 1000);

    if (secondsPast < 60) {
        return `${secondsPast} seconds ago`;
    } else if (secondsPast < 3600) {
        const minutes = Math.floor(secondsPast / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (secondsPast < 86400) {
        const hours = Math.floor(secondsPast / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (secondsPast < 2592000) {
        const days = Math.floor(secondsPast / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (secondsPast < 31536000) {
        const months = Math.floor(secondsPast / 2592000);
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
        const years = Math.floor(secondsPast / 31536000);
        return `${years} year${years > 1 ? 's' : ''} ago`;
    }
}


const VideoCard = ({video:{id:{videoId},snippet}}) => {
    console.log(videoId,snippet)
    let date=snippet.publishTime
    let time=timeAgo(date)
  return (
   <Card sx={{width:{xs:'100%',sm:'358px',md:'280px'} ,boxShadow:'none', borderRadius:0}}>
    <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
    <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:{xs:'100%',sm:'358px' ,md:'320px'}, height:200}}/>
    </Link>
    <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
    <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
    <Typography variant="subtitle1" fontWeight="bold" color="#fff">
        {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
    </Typography>
    </Link>
    <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`: demoChannelUrl}>
    <Typography variant="subtitle2" fontWeight="bold" color="gray" sx={{display:'flex'}}>
        {snippet?.channelTitle||demoChannelTitle}
        <CheckCircle sx={{width:'12px' ,color:'gray', ml:'5px',}}/>
    </Typography>
    </Link>

    <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
    <Typography variant="subtitle2" fontWeight="bold" color="gray" sx={{display:'flex'}}>
        {time}
        
    </Typography>
    </Link>
    </CardContent>
   </Card>
  )
}

export default VideoCard