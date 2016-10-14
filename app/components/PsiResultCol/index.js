import React from 'react';
import { Col } from 'react-flexbox-grid';
import PsiResultItem from 'components/PsiResultItem';

// import styles from './styles.css';
// ({ columnItem, loadResult })

class PsiResultCol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      psiResults: {},
    };
  }

  componentDidMount() {
    const { loadResult, columnItem } = this.props;
    loadResult({
      url: columnItem.domain,
      device: columnItem.device,
    }).then((result) => {
      this.setState({ psiResults: result.psiResults });
    });
  }

  render() {
    const { columnItem } = this.props;
    return (
      <Col
        xs={6} sm={6} md={6} lg={6}
      >
        <PsiResultItem
          {...columnItem}
          psiResults={this.state.psiResults}
        />
      </Col>
    );
  }
}

PsiResultCol.propTypes = {
  columnItem: React.PropTypes.object,
  loadResult: React.PropTypes.func,
};

export default PsiResultCol;
