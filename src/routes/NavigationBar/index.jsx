import React from 'react';
import { Outlet } from 'react-router-dom';

const styles = {
  width: '100%',
  height: '70px',
  background: '#d0d0d0',
  color: '#212121',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export const NavigationBar = () => {
  return (
    <>
      <div style={styles}>
        NavigationBar
      </div>
      <Outlet />
    </>
  )
}
