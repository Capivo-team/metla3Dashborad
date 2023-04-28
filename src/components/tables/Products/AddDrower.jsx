import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../Redux';
import { IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
export default function Drawer({
  items,
  isDrawerOpen,
  setIsDrawerOpen,
  button,
}) {
  const drawerRef = useRef(null);
  const dispatch = useDispatch();
  const lang = useSelector((e) => e.lang);

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsDrawerOpen(false);
      if (isDrawerOpen) {
        dispatch(actions.setIsStacky(2));
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {isDrawerOpen && <div className='screen-overlay'></div>}
      {button}
      <Stack
        sx={{ width: { sm: '350px', xs: '100%' } }}
        className={`drawer ${
          lang !== 'rtl' && isDrawerOpen
            ? 'open-right'
            : lang === 'rtl' && isDrawerOpen
            ? 'open-left'
            : ''
        }`}
        ref={drawerRef}
      >
        {items}
        <IconButton
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            display: { xs: 'block', sm: 'none' },
          }}
          onClick={() => setIsDrawerOpen(false)}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
    </div>
  );
}
