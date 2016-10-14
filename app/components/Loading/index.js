import React from 'react';

import styles from './styles.css';

const Pacman = () => (
  <div
    className={styles['uil-pacman-css']}
    style={{
      WebkitTransform: 'scale(0.3)',
      margin: '0 auto',
    }}
  >
    <div><div></div></div>
    <div><div></div></div>
    <div><div></div></div>
  </div>
);

export default Pacman;
