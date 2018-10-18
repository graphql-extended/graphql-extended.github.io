import * as React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Highlight from 'react-highlight';
import { Connectors } from 'gqlx-js';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';

export interface ConnectorListProps {
  value: Connectors;
}

const detailsStyle: React.CSSProperties = {
  flexDirection: 'column',
};

export const ConnectorList: React.SFC<ConnectorListProps> = ({ value }) => (
  <>
    {Object.keys(value).map(key =>
      Object.keys(value[key]).map(field => (
        <ExpansionPanel key={`${key}-${field}`}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              {key} &middot; {field}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={detailsStyle}>
            <Highlight className="js">{value[key][field]}</Highlight>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )),
    )}
  </>
);
