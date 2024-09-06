import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export type VideoChaptersProps = {
  data: { title: string; time: string }[];
  onClick: (value: number) => void;
};

const chapterStyle = {
  border: 'none',
  marginRight: '12px',
  '&:hover': {
    border: 'none',
    background: 'none',
  },
  justifyContent: 'flex-start',
};

const UIVideoChapters = (props: VideoChaptersProps) => {
  const { data, onClick } = props;

  function playOnTime(minSec: string) {
    const a = minSec.split(':'); // split it at the colons
    const second = +a[0] * 60 + +a[1];
    onClick(second);
  }

  return (
    <Box
      sx={{
        border: '1px solid #E9E9E9',
        borderRadius: '4px',
        paddingTop: '12px',
      }}
    >
      <Typography textAlign="center" fontWeight={700}>
        チャプターを見る
      </Typography>
      {data && data.length > 0 && (
        <Box
          className="chapter-wrapper"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            columnGap: '12px',
            mt: '24px',
            mb: '32px',
            flexWrap: 'wrap',
            maxHeight: '390px',
          }}
        >
          {data.map((chapter) => (
            <Button
              key={chapter.title}
              type="submit"
              variant="outlined"
              color="primary"
              sx={chapterStyle}
              onClick={(e) => playOnTime(chapter.time)}
            >
              <Typography color="primary" marginRight="12px">
                {chapter.time}
              </Typography>
              <Typography>{chapter.title}</Typography>
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default UIVideoChapters;
