import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-flexbox-grid';

// import styles from './styles.css';
import PsiResultRow from 'components/PsiResultRow';

function PsiResultSection(props) {
  const pages = [].concat(...props.pages.map((page) => {
    const addresses = page.addresses || [];
    return addresses.map((address) => ({
      rules: page.rules,
      strategy: page.strategy,
      domain: `${page.domain}${address}`,
    }));
  }));

  const rows = [];

  for (let i = 0; i < pages.length; i += 2) {
    rows.push(pages.slice(i, i + 2));
  }

  return (
    <Grid>{
      rows.map((cols, rowIndex) => (
        <PsiResultRow
          cols={cols}
          key={`row_${rowIndex}`}
          loadResult={props.loadResult}
        />
      ))
    }</Grid>
  );
}

PsiResultSection.propTypes = {
  pages: React.PropTypes.array,
  loadResult: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(PsiResultSection);
