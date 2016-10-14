import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { loadResult } from './actions';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

// Activate `onTouchTap` of `material-ui`
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import styles from './styles.css';

import Input from 'components/Input';
import PsiResultSection from 'containers/PsiResultSection';

const pages = [{
  domain: 'http://www.html5rocks.com/',
  addresses: ['en', 'ja', 'ko'],
  strategy: 'desktop',
  rules: [
    'Optimize images',
    'Minify JavaScript',
    'Leverage browser caching',
    'Reduce server response time',
    'Eliminate render-blocking JavaScript and CSS in above-the-fold content',
  ],
}];

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.wrapper}>
        <Helmet
          titleTemplate="Auto-psi for %s"
          defaultTitle="Auto-psi for web"
          meta={[
            { name: 'description', content: 'automatically run multiple psi in one page' },
          ]}
        />
        <Input />
        <PsiResultSection pages={pages} loadResult={this.props.loadResult} />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  loadResult: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps, { loadResult })(App);
