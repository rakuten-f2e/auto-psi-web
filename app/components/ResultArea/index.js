import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { CardText } from 'material-ui/Card';

import Loading from 'components/Loading';
import ResultItem from 'components/ResultItem';

function ResultArea(props) {
  const { psiResults } = props;

  const ruleResults = psiResults && psiResults.formattedResults && psiResults.formattedResults.ruleResults;

  return ruleResults ? <CardText>
    <Tabs>{
      Object.keys(ruleResults).map((ruleResultKey, idx) => {
        const {
          localizedRuleName,
          summary,
          urlBlocks,
        } = ruleResults[ruleResultKey];

        return (
          <Tab
            key={ruleResultKey}
            label={idx + 1}
            value={idx + 1}
          >
            <ResultItem
              summary={summary}
              urlBlocks={urlBlocks}
              ruleResultKey={ruleResultKey}
              localizedRuleName={localizedRuleName}
            />
          </Tab>
        );
      })
    }</Tabs>
  </CardText> : <Loading />;
}

ResultArea.propTypes = {
  psiResults: React.PropTypes.object,
};

export default ResultArea;
