import React from 'react';
import { Row } from 'react-flexbox-grid';
import PsiResultCol from 'components/PsiResultCol';

import styles from './styles.css';

function PsiResultRow({ cols, loadResult }) {
  return (
    <Row className={styles.PsiResultRow}>
      {cols.map((col, colIndex) => (
        <PsiResultCol
          columnItem={col}
          loadResult={loadResult}
          key={`psi-result-col_${colIndex}`}
        />
      ))}
    </Row>
  );
}

PsiResultRow.propTypes = {
  cols: React.PropTypes.array,
  loadResult: React.PropTypes.func.isRequired,
};

export default PsiResultRow;
