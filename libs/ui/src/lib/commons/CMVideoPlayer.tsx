'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';
import ReactPlayer from 'react-player';
import UIVideoChapters from '../molecules/UIVideoChapter';

export type CMVideoPlayerProps = {
  videoUrl: string;
  showChapter?: boolean;
  chapters: any[];
  sx?: any;
};

const CMVideoPlayer = (props: CMVideoPlayerProps) => {
  const { videoUrl, chapters, showChapter, sx } = props;
  const playerRef: any = useRef();

  function playOnTime(time: any): void {
    // console.log(time)
    playerRef?.current?.seekTo(time);
  }

  return (
    <Box sx={sx}>
      {videoUrl ? (
        <ReactPlayer ref={playerRef} url={videoUrl} className="react-player" controls width="100%" height="100%" />
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
          minHeight={'480px'}
          sx={{ backgroundColor: '#D9D9D9' }}
        >
          <Typography>Video is not registered</Typography>
        </Box>
      )}
      {showChapter && <UIVideoChapters data={chapters || []} onClick={(e: any) => playOnTime(e)} />}
    </Box>
  );
};

export default CMVideoPlayer;
