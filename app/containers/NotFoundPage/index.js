/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { connect } from 'react-redux';

import messages from './messages';
import { FormattedMessage } from 'react-intl';

export function NotFound() {
  return (
    <article>
      <FormattedMessage {...messages.header} />
      <FormattedMessage {...messages.homeButton} />
    </article>
  );
}

NotFound.propTypes = {
  dispatch: React.PropTypes.func,
};

// Wrap the component to inject dispatch and state into it
export default connect()(NotFound);
