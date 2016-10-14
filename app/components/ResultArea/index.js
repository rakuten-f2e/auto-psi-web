import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { CardText } from 'material-ui/Card';

import Loading from 'components/Loading';

function ResultArea(props) {
  const { psiResults } = props;

  const ruleResults = psiResults && psiResults.formattedResults && psiResults.formattedResults.ruleResults;

  return ruleResults ? <CardText>
    <Tabs>{
      Object.keys(ruleResults).map((ruleResultKey, idx) => {
        const {
          groups,
          localizedRuleName,
          summary,
          ruleImpact,
        } = ruleResults[ruleResultKey];

        return (
          <Tab
            key={ruleResultKey}
            label={idx}
            value={idx}
          >{`
            ${groups}
            ${localizedRuleName}
            ${summary}
            ${ruleImpact}
          `}</Tab>
        );
      })
    }</Tabs>
  </CardText> : <Loading />;
}

ResultArea.propTypes = {
  psiResults: React.PropTypes.object,
};

export default ResultArea;
