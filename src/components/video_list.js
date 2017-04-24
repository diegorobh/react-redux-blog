import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props)=>{
  const videoItems=props.videos.map((video)=>{
    return (
        <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />//el {video} itera
    //lo de video= o <Video... es JSX
    //key={video.etag} es el id que trae cada video del array
    )
  }

  )

  return (
    <ul className='col-md-4 list-group'>
    {videoItems}//React entiende que quieres * iteración
    //tratará de llenar esto de <li></li>
    </ul>
  );
};

export default VideoList;
/*cada video de youtube tiene un etag*/
