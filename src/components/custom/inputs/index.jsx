import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

export const InputWithLabel = ({
  value,
  setValue,
  name,
  type,
  labelText,
  required,
}) => {
  return (
    <Stack
      sx={{
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,.075)',
        background: '#f8f9fa',
        padding: '5px 0px 5px 0px',
        borderRadius: '19px',
        paddingLeft: '12px',
      }}
    >
      <Typography
        sx={{
          fontSize: '12px',
          color: 'gray',
        }}
      >
        {labelText}
        {required ? (
          <span style={{ color: 'red', fontSize: '16px' }}> *</span>
        ) : null}
      </Typography>
      <input
        style={{
          border: 'none',
          height: '25px',
          background: '#f8f9fa',
          outline: 'none',
        }}
        type={type}
        value={value[`${name}`]}
        onChange={(e) => setValue({ ...value, [`${name}`]: e.target.value })}
      />
    </Stack>
  );
};

export const Input = ({ value, setValue, type, name }) => {
  return (
    <input
      className='custom-input'
      color='info'
      value={value[`${name}`]}
      onChange={(e) => setValue({ ...value, [`${name}`]: e.target.value })}
      id='nameEnglish'
      type={type}
      variant='outlined'
    />
  );
};
