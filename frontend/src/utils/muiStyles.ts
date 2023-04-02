export const incomeSourceStyles = {
  color: '#f0f2f3',
  fontFamily: 'Palanquin',
  borderBottom: '1px solid #f0f2f3',
  '&::after': {
    borderBottom: '1px solid #690303 !important',
  },
  '&:hover': {
    '&::before': {
      borderBottom: '1px solid black !important',
    },
  },
  '& .MuiSelect-icon': {
    color: '#f0f2f3',
  },
};
export const incomeDateStyles = {
  ...incomeSourceStyles,
  '&.MuiSelect-select': {
    fontSize: '2em',
    padding: '0.2rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
export const incomeAmountStyles = {
  color: '#f0f2f3',
  fontFamily: 'Palanquin',
  borderBottom: '1px solid #f0f2f3',
  '& label': {
    visibility: 'hidden',
  },
  '& input': {
    color: '#f0f2f3',
    textAlign: 'center',
    fontSize: '2em',
    fontFamily: 'Bad Script',
    fontWeight: 'bold',
    letterSpacing: '3px',
  },
  '& .MuiInput-underline': {
    '&::after': {
      borderBottom: '1px solid #690303 !important',
    },
  },
  '& .MuiOutlinedInput-root': {
    '&:hover': {
      '&::before': {
        borderBottom: '1px solid black !important',
      },
    },
  },
};

export const incomeAdornmentStyles = {
  '& .MuiTypography-root': {
    color: '#f0f2f3',
    fontFamily: 'Palanquin',
  },
};
