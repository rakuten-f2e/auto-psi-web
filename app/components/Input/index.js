import React from 'react';
import TextField from 'material-ui/TextField';

import styles from './styles.css';

function Input() {
  return (
    <TextField
      hintText="Please input an url"
      className={styles.inputCenter}
    />
  );
}

export default Input;
