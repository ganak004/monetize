import LinearProgress from '@mui/material/LinearProgress';

interface IProgressBar {
  progress: number;
}

const ProgressBar = ({ progress }: IProgressBar) => (
  <LinearProgress
    variant="determinate"
    value={progress}
    sx={{
      background: '#9c9c9c',
      borderRadius: '5px',
      height: '5px',
      '& .MuiLinearProgress-bar': {
        backgroundColor: '#f0f2f3',
        borderRadius: '5px',
      },
      marginTop: '1rem',
    }}
  />
);

export default ProgressBar;
