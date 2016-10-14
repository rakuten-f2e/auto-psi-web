import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import Score from 'components/Score';
import ResultArea from 'components/ResultArea';

function getTitles(url) {
  const titles = url.match(/http:\/\/([\w|.]+)\/(.+)/);
  return {
    title: titles[1],
    subtitle: titles[2],
  };
}

function PsiResultItem(props) {
  const {
    domain,
    psiResults,
  } = props;

  const { title, subtitle } = getTitles(domain);
  const score = (psiResults && psiResults.ruleGroups && psiResults.ruleGroups.SPEED && psiResults.ruleGroups.SPEED.score);

  return (
    <Card>
      <CardHeader
        title={psiResults.title || title}
        subtitle={psiResults.id || subtitle}
        avatar={<Score score={score} />}
        style={{
          overflow: 'hidden',
        }}
      />
      <ResultArea psiResults={psiResults} />
    </Card>
  );
}

PsiResultItem.propTypes = {
  domain: React.PropTypes.string.isRequired,
  psiResults: React.PropTypes.object,
};

export default PsiResultItem;
