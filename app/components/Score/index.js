import React from 'react';
import Avatar from 'material-ui/Avatar';
import { green500, red900 } from 'material-ui/styles/colors';


function Score(props) {
  const { score } = props;
  return score || score === 0 ? (
    <Avatar
      backgroundColor={score > 80 ? green500 : red900}
      style={{
        marginRight: '10px',
      }}
    >
      {score}
    </Avatar>
  ) : null;
}

Score.propTypes = {
  score: React.PropTypes.number,
};

export default Score;
