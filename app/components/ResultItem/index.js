import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import reactHtmlParser from 'react-html-parser';

// import styles from './styles.css';

function parseFormat(result) {
  const { format, args } = result;

  return args ? format.match(/\{\{([A-Z_]+)\}\}/g).reduce((str, key) => {
    const parsedKey = (
      key === '{{BEGIN_LINK}}' || key === '{{END_LINK}}'
    ) ? 'LINK' : key.replace(/\{|\}/g, '');
    const mappedArgs = args.filter((arg) => arg.key === parsedKey);

    if (mappedArgs.length > 0) {
      switch (key) {
        case '{{BEGIN_LINK}}':
          return str.replace(key, `<a href="${mappedArgs[0].value}">`);
        case '{{END_LINK}}':
          return str.replace(key, '</a>');
        default:
          return str.replace(key, mappedArgs[0].value);
      }
    }

    return str;
  }, format) : format;
}

function ResultItem(props) {
  const {
    summary,
    urlBlocks,
    localizedRuleName,
  } = props;

  return (
    <div>
      <h2>{localizedRuleName}</h2>
      <h3>{summary && reactHtmlParser(parseFormat(summary))}</h3>
      {
        urlBlocks ? (
          urlBlocks.map((urlBlock, listIndex) => (
            <List
              key={`url-block-list_${listIndex}`}
            >
              <span>{reactHtmlParser(parseFormat(urlBlock.header))}</span>
              <Divider />
              {urlBlock.urls && urlBlock.urls.map((url, listItemIndex) => (
                <ListItem
                  key={`url-block-list-item_${listItemIndex}`}
                >{reactHtmlParser(parseFormat(url.result))}</ListItem>
              ))}
            </List>
          ))
        ) : null
      }
    </div>
  );
}

ResultItem.propTypes = {
  localizedRuleName: React.PropTypes.any,
  summary: React.PropTypes.any,
  urlBlocks: React.PropTypes.array,
};

export default ResultItem;
